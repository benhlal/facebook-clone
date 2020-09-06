import React from 'react';
import './RightSideBarRow.css';
import {Avatar} from "@material-ui/core";


function RightSideBarRow({src, Icon, title}) {
    return (
        <div className="rightSideBarRow">
            {src && <Avatar src={`${src}`}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    );
}

export default RightSideBarRow;
