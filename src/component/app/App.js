import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../login/Main";
import Login from "../login/Login";
import Messenger from "../messenger/Messenger";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/messenger" component={Messenger}/>
            </Switch>
        </div>
    );
}


export default App;
