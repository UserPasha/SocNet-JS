import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

function DialogsItems(props) {
    let path = "/messages/" + props.id
    return (
        <div className={c.item}>
            <img
                src={props.img}
                alt="avatar"/>
            <NavLink to={path}className={navData => navData.isActive ? c.active : c.item}><span>{props.name}</span></NavLink>

        </div>
    );
}

export default DialogsItems;