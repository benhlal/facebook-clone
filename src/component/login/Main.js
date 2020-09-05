import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import Loader from "./Loader";
import Home from "../Home/Home";

const Main = ({auth}) => {
    const currentUser = Object.assign({}, auth)
    return (
        <div>
            {!auth.isLoaded ? <Loader/> : !auth.isEmpty ? <Home user={currentUser}/> : <Login/>}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,
        currentUser: state.userReducer.user
    };
}

export default connect(mapStateToProps)(Main);
