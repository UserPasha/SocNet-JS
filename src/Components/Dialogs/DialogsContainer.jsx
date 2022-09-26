import React from 'react';
import {addNewMessageActionCreator} from "../../Redux/dialogs-reducer";
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
        addMessage: (newFormMessage) => {
            dispatch(addNewMessageActionCreator(newFormMessage))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs);