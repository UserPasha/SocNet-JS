import React from 'react';
import c from "./MessageItem.module.css"




function MessageItems(props) {
    return (
        <div className={c.wrapper}>
           <p>{props.message}</p>
        </div>
    );
}

export default MessageItems;