import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getCurrentPageAC, setTotalUsersListAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (newUsers) => {
            dispatch(setUsersAC(newUsers))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(getCurrentPageAC(pageNumber))
        },
        setTotalUsers: (totalCount) => {
            dispatch(setTotalUsersListAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);