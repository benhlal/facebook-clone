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
import {useStateValue} from "../../context/StateProvider";

function SideBar() {
    const [{user}] = useStateValue();

    return (
        <div className="sideBar">

            <SideBarRow Icon={LocalHospitalOutlinedIcon} title={'COVID-19 Information Center'}></SideBarRow>
            <SideBarRow src={EmojiFlagsOutlinedIcon} title={'pages'}></SideBarRow>
            <SideBarRow Icon={PeopleIcon} title={'Friends'}></SideBarRow>
            <SideBarRow Icon={ChatIcon} title={'Messenger'}></SideBarRow>
            <SideBarRow Icon={StorefrontIcon} title={'Marketplace'}></SideBarRow>
            <SideBarRow Icon={VideoLibraryIcon} title={'Videos'}></SideBarRow>
            <SideBarRow Icon={ExpandMoreIcon} title={'Marketplace'}></SideBarRow>
        </div>
    );
}

export default SideBar;
