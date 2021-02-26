import { Button } from '@material-ui/core'
import {auth, provider} from './firebase'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {
        // do login 
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))

    }
    const signInGuest = () => {
        // do login 
        auth.signInAnonymously()
        .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/603px-Discord_logo.svg.png" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
            <Button onClick={signInGuest}>Sign In as Guest</Button>
        </div>
    )
}

export default Login
