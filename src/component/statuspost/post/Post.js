import React, {useEffect, useState} from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {AccountCircleOutlined, ChatBubbleOutline, ExpandMoreOutlined, NearMeOutlined} from "@material-ui/icons";
import CommentBloc from "./commentbloc/CommentBloc";
import db from "../../../config/firebase";

function Post({postId, profilePic, image, username, timestamp, message, currentUser}) {

    const [openCommentBloc, setOpenCommentBloc] = useState(false)
    const [comments, setComments] = useState([])
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const commentsFlag = openCommentBloc;
    const likeFlag = like;

    useEffect(() => {
        let unsubscribe
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot =>
                    setComments(snapshot.docs.map(doc => doc.data()))))
        }
        return () => {
            unsubscribe()
        };
    }, [postId])


    const handleCommentBloc = () => {
        commentsFlag ? setOpenCommentBloc(false) : setOpenCommentBloc(true);
    }

    const manageLikeButton = () => {
        let likeCounter = likeCount;
        if (!likeFlag) {
            setLike(true)
            likeCounter++
        } else {
            setLike(false)
            likeCounter--
        }
        setLikeCount(likeCounter)
    }


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
            <hr className="separator"/>
            <div className="post__stats">
                <div className="post__stats__left">
                    <span>{likeCount}</span>
                </div>
                <div className="post__stats__right">
                    <span className="stats__comments" onClick={() => handleCommentBloc()}>{comments.length} Comments</span>
                    <span className="stats__shares">{24} Shares</span>
                </div>

            </div>
            <div className="post__options">


                <div className="post__option" onClick={manageLikeButton}>

                    {like === false ? <ThumbUpAltIcon/> : <ThumbUpAltIcon style={{color: "blue"}}/>}

                    <p>Like</p>
                </div>

                <div className="post__option">
                    <NearMeOutlined/>
                    <p>Share</p>
                </div>

                <div className="post__option" onClick={() => handleCommentBloc()}>
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <AccountCircleOutlined/>
                    <ExpandMoreOutlined/>
                </div>

            </div>
            {openCommentBloc &&
            <CommentBloc comments={comments} key={postId} postId={postId} currentUser={currentUser}/>}
        </div>
    );
}

export default Post;
