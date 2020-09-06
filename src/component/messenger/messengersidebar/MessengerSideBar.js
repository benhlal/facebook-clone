import React from 'react';
import './MessengerSideBar.css';
import SideBarRow from "../../sidebarre/sidebarrow/SideBarRow";
import PeopleIcon from '@material-ui/icons/People';
import {Input} from "@material-ui/core";

function MessengerSideBar() {

    return (
        <div className="messengerSideBar">

            <Input placeholder="serach a friend"/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>

        </div>
    );
}

export default MessengerSideBar;
