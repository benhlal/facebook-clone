import React from 'react';
import './App.css';
import Header from "../header/Header";
import SideBar from "../sidebarre/SideBar";
import TimeLineFeed from "../timelinefeed/TimeLineFeed";
import Widgets from "../widget/Widgets";
import Login from "../login/Login";
import {useStateValue} from "../../context/StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="app">
            {!user ? (<Login/>) :
                (<>
                        <Header/>
                        <div className="app__body">
                            <SideBar/>
                            <TimeLineFeed/>
                            <Widgets/>
                        </div>
                    </>
                )}

        </div>
    );
}

export default App;
