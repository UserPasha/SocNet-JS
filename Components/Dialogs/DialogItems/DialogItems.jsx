import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

/*const Dialog = (props) => {
    let path = "/messages/" + props.id
    return <div className={/!*c.userDialog+''+*!/c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}*/

// const dialogData = [
//     {name: "Pasha", id: "1"},
//     {name: "Sasha", id: "2"},
//     {name: "Masha", id: "3"},
//     {name: "Svetlana", id: "4"},
//     {name: "Dasha", id: "5"},
// ]

/*let DialogsElements = dialogData.map(el => <Dialog name={el.name} id={el.id}/>)*/


function DialogsItems(props) {
    return (
        <div>
            {props.name}
            {/*  {DialogsElements}*/}

        </div>
    );
}

export default DialogsItems;