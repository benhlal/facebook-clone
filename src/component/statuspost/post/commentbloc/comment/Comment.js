import React, {useState} from 'react';
import './Comment.css';
import {Avatar} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SubdirectoryArrowRightSharpIcon from '@material-ui/icons/SubdirectoryArrowRightSharp';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function Comment({commentContent, username, commenterPhoto, timestamp}) {
    const classes = useStyles();
    const [openCommentReply, setOpenCommentReply] = useState(false)
    const commentsFlag = openCommentReply;
    const handleReply = () => {
        commentsFlag ? setOpenCommentReply(false) : setOpenCommentReply(true);
    }
    return (
        <div className="comment">
            <div className="comment__top">
                <Avatar className="comment__avatar" className={classes.small} src={commenterPhoto}
                        alt="commenter photo"/>
                <div className="comment__data">
                    <p>{username}</p>
                    <p>{commentContent} </p>
                </div>
            </div>

            <div className="comment__options">
                <div className="comment__option">
                    <ThumbUpAltIcon fontSize={"small"}/>
                    <p>Like</p>
                </div>
                .
                <div className="comment__option" onClick={() => handleReply()}>
                    <SubdirectoryArrowRightSharpIcon fontSize={"small"}/>
                    <p>Reply</p>
                </div>
                .
                <div className="comment__option">

                    <p>{timestamp}</p>
                </div>
                {commentsFlag ? <>
                    <p><input style={{marginLeft: 20, margin: 3, borderRadius: 10, outline: 0}}
                              placeholder={'Sorry I\'m UnderConstruction :)'}
                              type="text"/></p></> : ''}
            </div>
        </div>
    );
}

export default Comment;
