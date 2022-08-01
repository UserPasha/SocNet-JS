import React from 'react';
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
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


export default compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs);