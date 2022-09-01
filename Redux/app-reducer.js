import {authUserThunkCreator} from './auth-reducer'
const SET_SUCCESS_INITIALIZED = 'SET_SUCCESS_INITIALIZED'

let initialState = {
    isInitialize: false
}

export const appReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_SUCCESS_INITIALIZED: {
            return {
                ...state, isInitialize: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_SUCCESS_INITIALIZED})

export const initializeApp = ()=> (dispatch) => {
    let promiseFromMe = dispatch(authUserThunkCreator())
    //dispatch(anotherThunk())
    Promise.all([promiseFromMe]).
    then(()=>{
        dispatch(initializedSuccess())
    })

}