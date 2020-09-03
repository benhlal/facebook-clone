import React from 'react';
import './App.css';
import Header from "../header/Header";
import SideBar from "../sidebarre/SideBar";
import TimeLineFeed from "../timelinefeed/TimeLineFeed";
import Login from "../login/Login";
import {signInPopUp} from "../../store/actions/auth";
import {connect} from "react-redux";

function App({user, signInPopUpProp}) {

    return (
        <div className="app">
            {!user ? (<Login user={user} toSignIn={signInPopUpProp}/>) :
                (<>
                        <Header user={user}/>
                        <div className="app__body">
                            <SideBar/>
                            <TimeLineFeed user={user}/>
                        </div>
                    </>
                )}

        </div>
    );
}


function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signInPopUpProp: (callback) => dispatch(signInPopUp(callback))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
