import React from 'react';
import './MessengerSideBarRow.css';
import {Avatar} from "@material-ui/core";


function MessengerSideBarRow({src, Icon, username, lastmessage}) {
    return (
        <div className="messengerSideBarRow">
            {src && <Avatar src={`${src}`}/>}
            <div className="messengerSideBarRow__info">
                <h4>{username}</h4>
                <h4>You: {lastmessage}</h4>
            </div>
        </div>
    );
}

export default MessengerSideBarRow;
