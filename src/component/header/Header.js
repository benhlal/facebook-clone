import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header({user, logOut}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header">

            <div className="header__left">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt="logo"/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>


            <div className="header__center">

                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>

            <div className="header__right">

                <div className="header__info">
                    <Avatar
                        src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon></AddIcon>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </IconButton>
                <IconButton>
                    <ForumIcon></ForumIcon>
                </IconButton>
                <IconButton onClick={handleClick}>
                    <ExpandMoreOutlinedIcon/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={()=>logOut()}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
