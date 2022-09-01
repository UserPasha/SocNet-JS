import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


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
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    }
}


export const authUserThunkCreator = () => {
    return (dispatch) => {
      return  authAPI.me().then(
            res => {
                if (res.resultCode === 0) {
                    let {id, email, login} = res.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authUserThunkCreator())
                }else{
                    let errorMessage = res.data.messages.length>0? res.data.messages[0]: 'some error'
                    dispatch(stopSubmit("login", {_error: errorMessage}))
                }
            }
        )
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(
            res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
    }
}