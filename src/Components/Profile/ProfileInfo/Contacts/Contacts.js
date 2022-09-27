import React from 'react';
import c from "../ProfileInfo.module.css";

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <>
            <div>
                <span className={c.request}>{contactTitle}: </span>
                <span className={c.response}>{contactValue}</span>
            </div>

        </>
    );
};

export default Contacts;