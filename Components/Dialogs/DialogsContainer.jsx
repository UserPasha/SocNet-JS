import React from 'react';
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Redux/storeContext";

function DialogsContainer(props) {

    /*let state = props.store.getState()

    let addNewMessage = () => {

        props.store.dispatch(addNewMessageActionCreator())
    }
    let onMessageChange = (text) => {
        let action = updateMessageTextActionCreator(text)
        props.store.dispatch(action)
    }*/

    return (
        <StoreContext.Consumer>
            {store => {
                    let state = store.getState()

                    let addNewMessage = () => {

                        store.dispatch(addNewMessageActionCreator())
                    }
                    let onMessageChange = (text) => {
                        let action = updateMessageTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return <Dialogs dialogs={state.dialogsPage.dialogs}
                                    messagesData={state.dialogsPage.messagesData}
                                    addMessage={addNewMessage}
                                    updateMessageText={onMessageChange}
                                    newMessageText={state.dialogsPage.newMessageText}
                    />;
                }
            }
        </StoreContext.Consumer>
    )
    /*return (<Dialogs dialogs={state.dialogsPage.dialogs}
                     messagesData={state.dialogsPage.messagesData}
                     addMessage={addNewMessage}
                     updateMessageText={onMessageChange}
                     newMessageText={state.dialogsPage.newMessageText}/>);*/
}

export default DialogsContainer;