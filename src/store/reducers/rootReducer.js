import {combineReducers} from "redux";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import userReducer from "./userReducer";
import {firebaseReducer} from "react-redux-firebase";

export default combineReducers({
    authReducer,
    firebaseReducer,
    apiStatusReducer,
    userReducer,
});
