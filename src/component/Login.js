import { Button } from '@material-ui/core'
import React from 'react'
import '../css/Login.css'
import {auth,provider} from '../firebase'
function Login() {
    const signin=()=>{
        auth.signInWithPopup(provider)
        .catch(err=>alert(err.message))
    }
    
    return (
        <div className="login">
            <div className="login__logo">
              <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/200px-Discord_logo.svg.png" alt=""/>
            </div>
            <Button onClick={signin}>Sign in</Button>
        </div>
    )
}

export default Login
