import React from 'react';
import c from "./Dialogs.module.css"
import DialogsItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {Redirect} from "react-router-dom";



function Dialogs(props) {

    let dialogsData = props.dialogs.map(d => <DialogsItems key={d.id}
                                                           {...d}
    />)
    let messagesData = props.messagesData.map(m => <MessageItems key={m.id} {...m}/>)
    let newMessageElement = React.createRef()
    let addNewMessage = () => {
        props.addMessage()
        //props.dispatch(addNewMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateMessageText(text)
        // let actionKeys = {type: "UPDATE-MESSAGE-TEXT", newText: text};
        // props.dispatch(updateMessageTextActionCreator(text))
    }
    if(!props.isAuth) return <Redirect to={"/login"}/>


    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>

                {dialogsData}

            </div>
            <div className={c.messages}>

                {messagesData}
                <div>
                    <textarea ref={newMessageElement}
                              onChange={onMessageChange}
                              value={props.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addNewMessage}>ADD</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;