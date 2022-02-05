import React from 'react';
import c from "./Dialogs.module.css"
import DialogsItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


function Dialogs(props) {

    let dialogsData = props.state.dialogs.map(d => <DialogsItems
        key={d.id}
        {...d}
    />)
    let messagesData = props.state.messagesData.map(m => <MessageItems key={m.id} {...m}/>)
    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>

                {dialogsData}

            </div>
            <div className={c.messages}>

                {messagesData}

            </div>
        </div>
    );
}

export default Dialogs;