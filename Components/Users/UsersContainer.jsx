import React from 'react';
import {connect} from "react-redux";
import {
     followUserThunkCreator,
    getUsersThunkCreator,
    onPageHandlerThunkCreator,
    setCurrentPage,
    unFollowUserThunkCreator
} from "../../Redux/users-reducer";
import UsersPresentation from "./UsersPresentation";
import Preloader from "../../common/Components/Preloader";



export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.togglePreloader(true)
        // usersAPI.getListOfUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.togglePreloader(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsers(data.totalCount)
        //
        // })

    }

    onPageHandler = (pageNumber) => {
        this.props.getCurrentPage(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        //
        // this.props.togglePreloader(true)
        // usersAPI.getCurrentPage(pageNumber, this.props.pageSize).then(data => {
        //     this.props.togglePreloader(false)
        //     this.props.setUsers(data.items)
        // })

    }


    render() {


        return (<>
                {this.props.isLoading ? <Preloader/> : null}
                <UsersPresentation totalUsers={this.props.totalUsers}
                                   pageSize={this.props.pageSize}
                                   currentPage={this.props.currentPage}
                                   onPageHandler={this.onPageHandler}
                                   users={this.props.users}
                                   requestToFollowIdArray={this.props.requestToFollowIdArray}
                                   unfollowUser={this.props.unfollowUser}
                                   followUser={this.props.followUser}
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
        isLoading: state.usersPage.isLoading,
        requestToFollowIdArray: state.usersPage.requestToFollowIdArray,
    }
}


export default connect(mapStateToProps,
    { setCurrentPage,
         getUsers: getUsersThunkCreator,
       getCurrentPage: onPageHandlerThunkCreator,
        unfollowUser: unFollowUserThunkCreator,
    followUser: followUserThunkCreator})(UsersContainer);