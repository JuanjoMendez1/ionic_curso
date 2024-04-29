import { 
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonContent,
    IonIcon,
    IonImg,
    IonInput,
    IonPage,
    IonToggle
} from '@ionic/react'
import { lockClosed, person, star } from "ionicons/icons"
import React, { useState } from 'react'
import "./Login.css"

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        "usuario": "",
        "password": ""
    })
    const {usuario, password} = formData
    const mostrar = () => setShowPassword((prevState) => !prevState)
    const ingresar = (e: any) => {
        console.log(usuario);
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        <IonPage>
            <IonContent className='ion-padding'>
                <IonCard className='ion-padding'>
                    <IonCardTitle>
                        <IonCardTitle>Login</IonCardTitle>
                    </IonCardTitle>
                    <IonCardContent>
                        <form>
                            <IonImg className='img_login' src='./usuario.png'></IonImg>
                            <IonInput 
                                id='usuario'
                                name='usuario' 
                                label='Nombre' 
                                type='text'
                                labelPlacement='floating'
                                fill='outline'
                                placeholder='Nombre'
                                className='ion-margin-bottom'
                                value={usuario}
                                onIonChange={ingresar}>
                                    <IonIcon slot='start' icon={person}></IonIcon>
                                </IonInput>
                            <IonInput 
                                id='password'
                                name='password' 
                                label='Contraseña' 
                                type={showPassword ? 'text' : 'password'}
                                labelPlacement='floating'
                                fill='outline'
                                placeholder='Contraseña'
                                value={password}>
                                    <IonIcon slot='start' icon={lockClosed}></IonIcon>
                                </IonInput>
                            <br></br>
                            <IonToggle onClick={mostrar}>Ver contraseña</IonToggle>
                            <IonButton expand='block' onClick={ingresar}>Ingresar</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    </div>
  )
}
