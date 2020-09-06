import React from 'react';
import './Home.css';
import Header from "../header/Header";
import SideBar from "../sidebarre/SideBar";
import TimeLineFeed from "../timelinefeed/TimeLineFeed";
import {disconnect} from "../../store/actions/auth";
import requireAuth from "../hoc/requireAuth";
import {connect} from "react-redux";
import {compose} from "redux";
import RightSideBar from "../sidebarre/sidebarright/RightSideBar";

function Home({logOff, user}) {

    return (
        <div className="home">
            <Header user={user} logOut={logOff}/>
            <div className="home__body">
                <SideBar/>
                <TimeLineFeed user={user}/>
                <RightSideBar/>

            </div>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logOff: () => dispatch(disconnect())
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), requireAuth)(Home);

