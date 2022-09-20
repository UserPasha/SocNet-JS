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
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsLoading,
    getPageSize,
    getRequestToFollowIdArray,
    getTotalUsers,
    getUsers
} from "../../Redux/users-selectors";



export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageHandler = (pageNumber) => {
        this.props.getCurrentPage(pageNumber, this.props.pageSize)

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        requestToFollowIdArray: getRequestToFollowIdArray(state),
    }
}

export default  compose( connect(mapStateToProps,
        { setCurrentPage,
            getUsers: getUsersThunkCreator,
            getCurrentPage: onPageHandlerThunkCreator,
            unfollowUser: unFollowUserThunkCreator,
            followUser: followUserThunkCreator}),
    WithAuthRedirect
)(UsersContainer)