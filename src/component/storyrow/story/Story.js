import React from 'react';
import './Story.css';
import {Avatar} from "@material-ui/core";

function Story({story_image, profile_picture, story_title}) {
    return (
        <div className="story" style={{
            backgroundImage: `url(${story_image})`
        }}>
            <Avatar className="story__avatar" src={profile_picture}/>
            <h4>{story_title}</h4>
        </div>
    );
}

export default Story;
