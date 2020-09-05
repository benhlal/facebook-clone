import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {signInWithPopUp} from "../../store/actions/auth";

function Login({signInPopUpProp, history}) {
    return (
        <div className="login">
            <div className="login__logo">
                <img src="../static/fb.svg"/>
                <img src="../static/fb_logo.svg"/>
            </div>
            <Button onClick={() => signInPopUpProp(() => history.push("/home"))}>Sign In</Button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signInPopUpProp: (callback) => dispatch(signInWithPopUp(callback))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
