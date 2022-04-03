const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

export const ProfileReducer= (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                title: state.newPostText,
                likes: "0 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            state.postData.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

   /*  if(action.type === ADD_POST){
        let newPost = {
            id: 5,
            title: state.newPostText,
            likes: "0 likes",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
        }
        state.postData.push(newPost)
         state.newPostText = ""
     }else if(action.type === UPDATE_POST_TEXT){
         state.newPostText = action.newText
    }

    return state*/
}

export const addPostActionCreator = () =>{
    return{
        type: "ADD-POST"
    }
}
export const updatePostTextActionCreator=(text)=>{
    return {
        type: "UPDATE-POST-TEXT",
        newText: text
    }
}