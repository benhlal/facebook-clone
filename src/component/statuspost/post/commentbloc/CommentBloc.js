import React, {useState} from 'react';
import './CommentBloc.css';
import {Avatar} from "@material-ui/core";
import db from "../../../../config/firebase";
import * as firebase from "firebase";
import Comment from "./comment/Comment";
import {formatDate} from "../../../../utilities/Utilities";


function CommentBloc({currentUser, postId, comments}) {
    const [commentInput, setCommentInput] = useState("");

    const handleSubmitComment = (e) => {
        e.preventDefault()

        db.collection("posts").doc(postId).collection("comments").add(
            {
                message: commentInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: currentUser.displayName,
                profilePic: currentUser.photoURL,
                postIdFk: postId
            }
        ).then(() => {
            setCommentInput('')
        });
    }


    return (
        <div className="commentBloc">
            <div className="commentBloc__top">
                <Avatar src={currentUser.photoURL}/>
                <form>
                    <input className="commentBloc__top__input"
                           type="text"
                           autoFocus={true}
                           value={commentInput}
                           onChange={e => setCommentInput(e.target.value)}
                           placeholder={`Write a comment ...?`}/>
                    <button type="submit" onClick={handleSubmitComment}/>
                </form>

            </div>
            <div className="commentBloc__bottom">
                {comments.map(comment => <Comment
                    commenterPhoto={comment.profilePic}
                    username={comment.username}
                    commentContent={comment.message}
                    timestamp={formatDate(comment.timestamp)}/>)}

            </div>
        </div>
    );
}

export default CommentBloc;
