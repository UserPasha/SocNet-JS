import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS ="SET_USERS"

let initialState = {
    users: []
    /*users: [
        {
            id: v1(),
            photoURL: "https://image.shutterstock.com/image-vector/logistic-company-vector-logo-arrow-260nw-643639804.jpg",
            fullName: "Grigory Lermontov",
            followed: false,
            status: "active",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: v1(),
            photoURL: "https://image.shutterstock.com/image-vector/symbol-gas-oil-drop-made-260nw-209923879.jpg",
            fullName: "Elena Katina",
            followed: false,
            status: "im learn something...",
            location: {country: "Belarus", city: "Hrodno"}
        },
        {
            id: v1(),
            photoURL: "https://image.shutterstock.com/image-vector/logistic-company-vector-logo-arrow-260nw-643639804.jpg",
            fullName: "Vasiliy Smolov",
            followed: true,
            status: "buy a car",
            location: {country: "Belarus", city: "Minsk"}
        },

    ],*/

}

export const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId? {...m, followed: true} : m)}

        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId? {...m, followed: false} : m)}

        case SET_USERS:
            return {...state, users: [...state.users, ...action.newUsers]}
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