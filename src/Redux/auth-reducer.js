import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL = 'AUTH/GET_CAPTCHA_URL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state = initialState, action) => {
    console.log(initialState.captchaUrl);
    switch (action.type) {
        case SET_USER_DATA:
        case  GET_CAPTCHA_URL: {
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
export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: 'AUTH/GET_CAPTCHA_URL', payload: {captchaUrl}
    }
}


export const authUserThunkCreator = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authUserThunkCreator())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk())
        }
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
export const getCaptchaUrlThunk = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    let captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

