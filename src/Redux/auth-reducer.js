import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: 'AUTH/SET_USER_DATA', payload: {userId, email, login, isAuth}
    }
}


export const authUserThunkCreator = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authUserThunkCreator())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit("login", {_error: errorMessage}))
    }

}

export const logoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}