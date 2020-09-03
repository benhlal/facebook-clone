import {
    EMAIL_NOT_VERIFIED,
    RESET_ERROR,
    RESET_SUCCESS,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from "../actions/actionTypes";

const INITIAL_STATE = {
    authMsg: ""
};

export default function (state = INITIAL_STATE, action) {
    if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
        return {...state, authMsg: ""};
    } else if (
        action.type === SIGNUP_SUCCESS ||
        action.type === SIGNUP_ERROR ||
        action.type === SIGNIN_ERROR ||
        action.type === EMAIL_NOT_VERIFIED ||
        action.type === SIGNOUT_ERROR ||
        action.type === RESET_SUCCESS ||
        action.type === RESET_ERROR
    ) {
        return {...state, authMsg: action.payload};
    } else {
        return state;
    }
}
