import {
    RESET_ERROR,
    RESET_SUCCESS,
    SIGNIN_ERROR,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from "./actionTypes";
import {apiCallError, beginApiCall} from "./apiStatus";
import firebase, {auth, provider} from "../../config/firebase";
import {actionTypes} from "../../context/reducer";

// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
    try {
        dispatch(beginApiCall());
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(dataBeforeEmail => {
                firebase.auth().onAuthStateChanged(function (user) {
                    user.sendEmailVerification();
                });
            })
            .then(dataAfterEmail => {
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        // Sign up successful
                        dispatch({
                            type: SIGNUP_SUCCESS,
                            payload:
                                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
                        });
                    } else {
                        // Signup failed
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload:
                                "Something went wrong, we couldn't create your account. Please try again."
                        });
                    }
                });
            })
            .catch(() => {
                dispatch(apiCallError());
                dispatch({
                    type: SIGNUP_ERROR,
                    payload:
                        "Something went wrong, we couldn't create your account. Please try again."
                });
            });
    } catch (err) {
        dispatch(apiCallError());
        dispatch({
            type: SIGNUP_ERROR,
            payload:
                "Something went wrong, we couldn't create your account. Please try again."
        });
    }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async dispatch => {

    try {
        dispatch(beginApiCall());
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(data => {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: data.user
                })
            })
            .catch(() => {
                dispatch(apiCallError());
                dispatch({
                    type: SIGNIN_ERROR,
                    payload: "Invalid login credentials"
                });
            });
    } catch (err) {
        dispatch(apiCallError());
        dispatch({type: SIGNIN_ERROR, payload: "Invalid login credentials"});
    }
};

// Signing out with Firebase
export const signout = () => async dispatch => {
    try {
        dispatch(beginApiCall());
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({type: SIGNOUT_SUCCESS});
            })
            .catch(() => {
                dispatch(apiCallError());
                dispatch({
                    type: SIGNOUT_ERROR,
                    payload: "Error, we were not able to log you out. Please try again."
                });
            });
    } catch (err) {
        dispatch(apiCallError());
        dispatch({
            type: SIGNOUT_ERROR,
            payload: "Error, we were not able to log you out. Please try again."
        });
    }
};

// Reset password with Firebase
export const resetPassword = email => async dispatch => {
    try {
        dispatch(beginApiCall());
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() =>
                dispatch({
                    type: RESET_SUCCESS,
                    payload:
                        "Check your inbox. We've sent you a secured reset link by e-mail."
                })
            )
            .catch(() => {
                dispatch(apiCallError());
                dispatch({
                    type: RESET_ERROR,
                    payload:
                        "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin."
                });
            });
    } catch (err) {
        dispatch(apiCallError());
        dispatch({type: RESET_ERROR, payload: err});
    }
};

export const signInPopUp = () => async dispatch => {

    try {
        dispatch(beginApiCall());
        auth.signInWithPopup(provider)
            .then((res) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: res.user
                })
            })
            .catch(() => {
                dispatch(apiCallError());
                dispatch({
                    type: SIGNIN_ERROR,
                    payload: "failed to get credentials from google"
                });
            });
    } catch (err) {
        dispatch(apiCallError());
        dispatch({type: SIGNIN_ERROR, payload: "Invalid login credentials"});
    }
};