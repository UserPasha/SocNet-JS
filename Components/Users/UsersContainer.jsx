import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (newUsers)=>{
            dispatch(setUsersAC(newUsers))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);