import React from 'react';
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id
    return <div className={/*c.userDialog+''+*/c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageItem = (props) => {

    return <div className={c.message}>{props.message}</div>


}

const dialogData = [
    {name: "Pasha", id: "1"},
    {name: "Sasha", id: "2"},
    {name: "Masha", id: "3"},
    {name: "Svetlana", id: "4"},
    {name: "Dasha", id: "5"},
]
const messageData = [
    {message: "Hi!", id: "1"},
    {message: "Man!", id: "2"},
    {message: "Yo!", id: "3"},

]
let DialogsElements = dialogData.map(el => <DialogItem name={el.name} id={el.id}/>)
let MessageElements = messageData.map(el => <MessageItem message={el.message} id={el.id}/>)


function Dialogs(props) {
    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>

                {DialogsElements}


                {/* <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>*/}


            </div>
            <div className={c.messages}>
                {MessageElements}
                {/*  <MessageItem message={messageData[0].message}/>
                <MessageItem message={messageData[1].message}/>
                <MessageItem message={messageData[2].message}/>*/}
            </div>
        </div>
    );
}

export default Dialogs;