import {authAPI} from "../API/api";

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login}
    }
}

export const authUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(
            data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }

            })
    }
}