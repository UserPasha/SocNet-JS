import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsers, setUsers, togglePreloader, unfollow

} from "../../Redux/users-reducer";
import axios from "axios";
import UsersPresentation from "./UsersPresentation";
import Preloader from "../../common/Components/Preloader";

export class UsersClass extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.togglePreloader(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
        })

    }

    onPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.togglePreloader(false)
            this.props.setUsers(response.data.items)
        })

    }


    render() {


        return (<>
                {this.props.isLoading ? <Preloader/> : null}
                <UsersPresentation totalUsers={this.props.totalUsers}
                                   pageSize={this.props.pageSize}
                                   currentPage={this.props.currentPage}
                                   onPageHandler={this.onPageHandler}
                                   follow={this.props.follow}
                                   unfollow={this.props.unfollow}
                                   users={this.props.users}
                />
            </>

        );
    };
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (newUsers) => {
//             dispatch(setUsers(newUsers))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsers: (totalCount) => {
//             dispatch(setTotalUsers(totalCount))
//         },
//         togglePreloader: (isLoadingBoolean) => {
//             dispatch(togglePreloader(isLoadingBoolean))
//         }
//
//
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setTotalUsers, setUsers, togglePreloader})(UsersClass);