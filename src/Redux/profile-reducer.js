import {v1} from "uuid";
import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "PROFILE/ADD-POST"
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE"
const SET_STATUS = "PROFILE/SET_STATUS"
const REMOVE_POST = 'PROFILE/REMOVE_POST'
const SAVE_IMAGE = "PROFILE/SAVE_IMAGE"


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
    profile: null,
    status: ""
}

export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                title: action.newPostFormText,
                likes: "0 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case REMOVE_POST:
            return {
                ...state,
                postData: state.postData.filter(f => f.id !== action.id)
            }
        case SAVE_IMAGE:
            return {
                ...state,
                profile: {...state.profile, photos: action.image }
            }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostFormText) => {
    return {
        type: "PROFILE/ADD-POST", newPostFormText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: "PROFILE/SET_USER_PROFILE",
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: "PROFILE/SET_STATUS",
        status
    }
}

export const removePost = (id) => {
    return {
        type: 'REMOVE_POST',
        id
    }
}
export const saveImageSuccess = (image) =>{
    return {
        type: "PROFILE/SAVE_IMAGE",
        image
    }
}

export const userProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await usersAPI.userProfile(userId)

    dispatch(setUserProfile(response))
}

export const getProfileStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))
}

export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const saveImageTC = (image) => async (dispatch)=> {
    let response = await profileAPI.saveImage(image)
    if (response.data.resultCode === 0) {
        dispatch(saveImageSuccess(response.data.data.photos))
    }
}
export const saveProfileTC =(data)=> async (dispatch, getState)=>{
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfileInfo(data)
    if (response.data.resultCode === 0) {
        dispatch(userProfileThunkCreator(userId))
    }
    else{
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('edit-profile', {_error: errorMessage}))
        return Promise.reject(response.data.messages[0])
    }
}