import React from 'react';
import './RightSideBar.css';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import RightSideBarRow from "./sidebarrowrightrow/RightSideBarRow";

function RightSideBar() {

    return (
        <div className="rightSideBar">

            <RightSideBarRow Icon={LocalHospitalOutlinedIcon} title={'Your Pages'}/>
            <RightSideBarRow src={'https://lh3.googleusercontent.com/a-/AOh14GiGxax1nHtkqHnm3MnX7Kqppes6pvoUThf30AyG3g'}
                             title={'COVID-19 Information Center'}/>
            <RightSideBarRow
                src={'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/13240058_10156877210890623_6647033211337066115_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=EKuvKVP2OaIAX_adTTj&_nc_ht=scontent-cdt1-1.xx&oh=7b2300e99d711f89e037cdf14a63a8f8&oe=5F7955A3'}
                title={'Yassine'}/>
            <RightSideBarRow
                src={'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/96840589_125382552482494_5226420237917749248_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=VH-eGSz5WAwAX_s87S3&_nc_ht=scontent-cdg2-1.xx&oh=f35bb53a858864918e3cac1ec20b8d48&oe=5F79CA74'}
                title={'Xman'}/>
            <RightSideBarRow
                src={'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/40373458_523347181423785_2293808558094942208_o.jpg?_nc_cat=105&_nc_sid=1eb0c7&_nc_ohc=R-c4qUq1WzoAX8Y6ncD&_nc_ht=scontent-cdt1-1.xx&oh=c96d9bfb7aac3996f18dc142dc443f62&oe=5F79866E'}
                title={'Lara Croft'}/>
            <RightSideBarRow
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'}
                title={'React'}/>
        </div>
    );
}

export default RightSideBar;
