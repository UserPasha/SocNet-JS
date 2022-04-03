const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

export const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                message: state.newMessageText,
                id: "8"
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_MESSAGE_TEXT :
            state.newMessageText = action.newText
            return state
        default:
            return state

    }

    // if(action.type === ADD_MESSAGE){
    //     let newMessage =  {
    //         message: state.newMessageText,
    //         id: "8"
    //     }
    //     state.messagesData.push(newMessage)
    //     state.newMessageText = ""
    // }
    // else if(action.type === UPDATE_MESSAGE_TEXT){
    //     state.newMessageText = action.newText
    // }


}
export const addNewMessageActionCreator = () => {
    return{
        type: "ADD-MESSAGE"
    }
}
export const updateMessageTextActionCreator = (text) =>{
    return{
        type: "UPDATE-MESSAGE-TEXT",
        newText: text
    }
}