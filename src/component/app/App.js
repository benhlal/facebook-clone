import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../login/Main";
import Login from "../login/Login";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </div>
    );
}


export default App;
