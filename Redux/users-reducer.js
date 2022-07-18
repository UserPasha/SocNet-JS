import {usersAPI} from "../API/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "SET_TOTAL_USER_LIST"
const IS_LOADING = "IS_LOADING"
const REQUEST_TO_FOLLOW = "REQUEST_TO_FOLLOW"


let initialState = {
    users: [],
    pageSize: 15,
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
        type: "FOLLOW", userId
    }
}
export const unfollow = (userId) => {
    return {
        type: "UNFOLLOW", userId
    }
}
export const setUsers = (newUsers) => {
    return {
        type: "SET_USERS", newUsers
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: "GET_CURRENT_PAGE", currentPage
    }
}
export const setTotalUsers = (totalUserCount) => {
    return {
        type: "SET_TOTAL_USER_LIST", userList: totalUserCount
    }
}
export const togglePreloader = (isLoadingBoolean) => {
    return {
        type: "IS_LOADING", isLoadingBoolean
    }
}
export const followRequester = (isLoadingBoolean, id) => {
    return {
        type: "REQUEST_TO_FOLLOW", isLoadingBoolean, id
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloader(true))
        usersAPI.getListOfUsers(currentPage, pageSize).then(data => {
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount))
        })
    }
}

export const onPageHandlerThunkCreator = (pageNumber, pageSize)=> {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(togglePreloader(true))
        usersAPI.getCurrentPage(pageNumber, pageSize).then(data => {
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const unFollowUserThunkCreator = (id)=> {
    return (dispatch) => {
        dispatch(followRequester(true, id))
        usersAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(followRequester(false, id))
        })
    }
}

export const followUserThunkCreator = (id)=> {
    return (dispatch) => {
        dispatch(followRequester(true, id))
        usersAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(followRequester(false, id))
        })
    }
}

