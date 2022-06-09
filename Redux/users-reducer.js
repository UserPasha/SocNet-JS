const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "SET_TOTAL_USER_LIST"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 11

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

        default:
            return state

    }


}
export const followAC = (userId) => {
    return {
        type: "FOLLOW", userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: "UNFOLLOW", userId
    }
}
export const setUsersAC = (newUsers) => {
    return {
        type: "SET_USERS", newUsers
    }
}
export const getCurrentPageAC = (currentPage) => {
    return {
        type: "GET_CURRENT_PAGE", currentPage
    }
}
export const setTotalUsersListAC = (totalUserCount) => {
    return {
        type: "SET_TOTAL_USER_LIST", userList: totalUserCount
    }
}
