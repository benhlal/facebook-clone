import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";

function Login({toSignIn}) {

    return (
        <div className="login">
            <div className="login__logo">
                <img src="../static/fb.svg"/>
                <img src="../static/fb_logo.svg"/>
            </div>
            <Button onClick={toSignIn}>Sign In</Button>
        </div>
    );
}


export default Login;
