import React, {useState} from 'react';
import './StatusPost.css';
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from "../../config/firebase";
import * as firebase from "firebase";

function StatusPost({user}) {

    const [postInput, setPostInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("posts").add(
            {
                message: postInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                image: imageUrl,
                profilePic: user.photoURL,
            }
        ).then(() => {
            setPostInput('')
            setImageUrl('')
        });
    }


    return (
        <div className="statusPost">

            <div className="statusPost__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="statusPost__top__input" type="text"
                           placeholder={`what's is your mind ${user.displayName.split(' ').pop()} ...?`}
                           value={postInput}
                           onChange={e => setPostInput(e.target.value)}/>
                    <input value={imageUrl} onChange={event => setImageUrl(event.target.value)}
                           placeholder={`image URL (Optional)`}/>
                    <button type="submit" onClick={handleSubmit}>hidden</button>
                </form>

            </div>
            <div className="statusPost__bottom">
                <div className="statusPost__bottom__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="statusPost__bottom__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="statusPost__bottom__option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default StatusPost;
