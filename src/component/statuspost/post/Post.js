import React from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {AccountCircleOutlined, ChatBubbleOutline, ExpandMoreOutlined, NearMeOutlined} from "@material-ui/icons";

function Post({profilePic, image, username, timestamp, message, currentUser}) {


    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>

                <div className="post__top__info">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>

            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">


                <div className="post__option">
                    <ThumbUpAltIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <NearMeOutlined/>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <AccountCircleOutlined/>
                    <ExpandMoreOutlined/>
                </div>

            </div>
            <div className="statusPost__top">
                <Avatar src={currentUser.photoURL}/>
                <form>
                    <input className="statusPost__top__input" type="text"
                           placeholder={`Write a comment ...?`}/>
                    <button type="submit">hidden</button>
                </form>

            </div>
        </div>
    );
}

export default Post;
