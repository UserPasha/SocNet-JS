import React from 'react';
import c from "./Dialogs.module.css"

function Dialogs(props) {
    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>
                <div  className={/*c.userDialog+''+*/c.active}>
                    Pasha
                </div>
                <div className={c.userDialog}>
                    Sasha
                </div>
                <div className={c.userDialog}>
                    Masha
                </div>
                <div className={c.userDialog}>
                    Svetlana
                </div>
                <div className={c.userDialog}>
                    Dasha
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>
                    Hi!
                </div>
                <div className={c.message}>
                    yo!
                </div>
                <div className={c.message}>
                    Man!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;