import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "../config/firebase";
import {useStateValue} from "../../context/StateProvider";
import {actionTypes} from "../../context/reducer";

function Login() {

    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                })
            })
            .catch((err) => alert(err.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="../static/fb.svg"/>
                <img src="../static/fb_logo.svg"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
