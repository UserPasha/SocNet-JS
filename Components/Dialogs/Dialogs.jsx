import React from 'react';
import c from "./Dialogs.module.css"
import DialogsItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {NavLink} from "react-router-dom";





function Dialogs(props) {
    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>

                <DialogsItems name={props.name} id={props.id} />

            </div>
            <div className={c.messages}>

                <MessageItems message={props.message}/>

            </div>
        </div>
    );
}

export default Dialogs;