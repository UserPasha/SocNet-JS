import {usersAPI} from "../API/api";

const FOLLOW = "USERS/FOLLOW"
const UNFOLLOW = "USERS/UNFOLLOW"
const SET_USERS = "USERS/SET_USERS"
const GET_CURRENT_PAGE = "USERS/GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "USERS/SET_TOTAL_USER_LIST"
const IS_LOADING = "USERS/IS_LOADING"
const REQUEST_TO_FOLLOW = "USERS/REQUEST_TO_FOLLOW"


let initialState = {
    users: [],
    pageSize: 10,
    totalUsers: 0,
    currentPage: 1,
    isLoading: false,
    requestToFollowIdArray: []
}

export const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)}

        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}

        case SET_USERS:
            return {...state, users: action.newUsers}

        case GET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USER_LIST:
            return {...state, totalUsers: action.userList}

        case IS_LOADING:
            return {...state, isLoading: action.isLoadingBoolean}

        case REQUEST_TO_FOLLOW:
            return {
                ...state, requestToFollowIdArray: action.isLoadingBoolean ?
                    [...state.requestToFollowIdArray, action.id]
                    : state.requestToFollowIdArray.filter(f => f !== action.id)
            }

        default:
            return state

    }


}
export const follow = (userId) => {
    return {
        type: "USERS/FOLLOW", userId
    }
}
export const unfollow = (userId) => {
    return {
        type: "USERS/UNFOLLOW", userId
    }
}
export const setUsers = (newUsers) => {
    return {
        type: "USERS/SET_USERS", newUsers
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: "USERS/GET_CURRENT_PAGE", currentPage
    }
}
export const setTotalUsers = (totalUserCount) => {
    return {
        type: "USERS/SET_TOTAL_USER_LIST", userList: totalUserCount
    }
}
export const togglePreloader = (isLoadingBoolean) => {
    return {
        type: "USERS/IS_LOADING", isLoadingBoolean
    }
}
export const followRequester = (isLoadingBoolean, id) => {
    return {
        type: "USERS/REQUEST_TO_FOLLOW", isLoadingBoolean, id
    }
}



export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true))

    let response = await usersAPI.getListOfUsers(currentPage, pageSize)
    dispatch(togglePreloader(false))
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount))

}

export const onPageHandlerThunkCreator = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(togglePreloader(true))

    let response = await usersAPI.getCurrentPage(pageNumber, pageSize)
    dispatch(togglePreloader(false))
    dispatch(setUsers(response.items))

}

export const unFollowUserThunkCreator = (id) => async (dispatch) => {
    dispatch(followRequester(true, id))

    let response = await usersAPI.unfollowUser(id)
    if (response.resultCode === 0) {
        dispatch(unfollow(id))
    }
    dispatch(followRequester(false, id))


}

export const followUserThunkCreator = (id) => async (dispatch) => {
    dispatch(followRequester(true, id))

    let response = await usersAPI.followUser(id)
    if (response.resultCode === 0) {
        dispatch(follow(id))
    }
    dispatch(followRequester(false, id))


}

