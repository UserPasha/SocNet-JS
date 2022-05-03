import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    postData:
        [
            {
                id: v1(),
                title: "yo!",
                likes: "20 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            },
            {
                id: v1(),
                title: "hey!",
                likes: "30 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUhrgutc0KGdPsVqtYabKuqq0m4NDoutU-g&usqp=CAU"
            }
        ],
    newPostText: "hey! Its posts area!"
}

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                title: state.newPostText,
                likes: "0 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }


        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

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

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: text
    }
}