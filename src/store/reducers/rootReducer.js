import {combineReducers} from "redux";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import userReducer from "./userReducer";

export default combineReducers({
    authReducer,
    apiStatusReducer,
    userReducer
});
