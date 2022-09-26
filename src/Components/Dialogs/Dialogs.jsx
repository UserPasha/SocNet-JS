import React from 'react';
import c from "./Dialogs.module.css"
import DialogsItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/Components/FormControls";
import {MaxLengthIs100, requiredField} from "../../utils/validation/validator";


function Dialogs(props) {
    const addNewFormMessage = (data) => {
        console.log(data.dialogText)
        props.addMessage(data.dialogText)

    }
    let dialogsData = props.dialogs.map(d => <DialogsItems key={d.id}
                                                           {...d}
    />)
    let messagesData = props.messagesData.map(m => <MessageItems key={m.id} {...m}/>)


    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={c.dialogWrapper}>
            <div className={c.dialogs}>

                {dialogsData}

            </div>
            <div className={c.messages}>

                {messagesData}
                <div>

                    <DialogsReduxForm onSubmit={addNewFormMessage}/>
                </div>

            </div>
        </div>
    );
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"dialogText"} component={TextArea} placeholder={"Enter your message"}
                validate={[requiredField, MaxLengthIs100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: "Dialogs"})(DialogsForm)

export default Dialogs;