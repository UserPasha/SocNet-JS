import React from 'react';
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = ( props) =>{
let path = "/messages/"+props.id
    return <div  className={/*c.userDialog+''+*/c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageItem =(props)=>{

    return  <div className={c.message}>{props.message}</div>

}
function Dialogs(props) {
    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>
                <DialogItem name="Pasha" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Masha" id="3"/>
                <DialogItem name="Svetlana" id="4"/>
                <DialogItem name="Dasha" id="5"/>

            </div>
            <div className={c.messages}>
                <MessageItem message="Hi!"/>
                <MessageItem message="Man!"/>
                <MessageItem message="Yo!"/>

            </div>
        </div>
    );
}

export default Dialogs;