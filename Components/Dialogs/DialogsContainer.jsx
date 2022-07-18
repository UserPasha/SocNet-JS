import React from 'react';
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*function DialogsContainer(props) {

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

}*/
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;