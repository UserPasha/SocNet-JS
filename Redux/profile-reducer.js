import {v1} from "uuid";
import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"


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
    newPostText: "hey! Its posts area!",
    profile: null,
    status: ""
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: return {
            ...state,
            status: action.status
        }

        default:
            return state
    }

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
export const setUserProfile = (profile) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    }
}
export const setStatus = (status) =>{
    return {
        type: "SET_STATUS",
        status
    }
}
export const userProfileThunkCreator = (userId)=>{
    return (dispatch)=>{
        usersAPI.userProfile(userId)
            .then(data=>{
                dispatch(setUserProfile(data))
            })
    }
}

export const getProfileStatusThunkCreator = (userId)=>{
    return(dispatch)=>{
        profileAPI.getStatus(userId)
            .then(res=>{
                dispatch(setStatus(res.data))
            })
    }
}

export const updateProfileStatusThunkCreator = (status)=> (dispatch)=>{
        profileAPI.updateStatus(status)
            .then(res=>{
                if(res.data.resultCode===0){
                    dispatch(setStatus(status))
                }
            })
}