import React from 'react';
import './SideBar.css';
import SideBarRow from "./sidebarrow/SideBarRow";
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";

function SideBar() {

    return (
        <div className="sideBar">

            <SideBarRow Icon={LocalHospitalOutlinedIcon} title={'COVID-19 Information Center'}/>
            <SideBarRow Icon={EmojiFlagsOutlinedIcon} title={'pages'}/>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}/>
            <Link style={{ color: 'inherit', textDecoration: 'none'}} to={"/messenger"}>
                <SideBarRow Icon={ChatIcon} title={'Messenger'}/>
            </Link>
            <SideBarRow Icon={StorefrontIcon} title={'Marketplace'}/>
            <SideBarRow Icon={VideoLibraryIcon} title={'Videos'}/>
            <SideBarRow Icon={ExpandMoreIcon} title={'Marketplace'}/>
        </div>
    );
}

export default SideBar;
