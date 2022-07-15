import React from 'react';
import {connect} from "react-redux";
import {
    follow, followRequester, setCurrentPage, setTotalUsers, setUsers, togglePreloader, unfollow

} from "../../Redux/users-reducer";
import axios from "axios";
import UsersPresentation from "./UsersPresentation";
import Preloader from "../../common/Components/Preloader";
import {usersAPI} from "../../API/api";


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true)
        usersAPI.getListOfUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togglePreloader(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount)

        })

    }

    onPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.togglePreloader(true)
        usersAPI.getCurrentPage(pageNumber, this.props.pageSize).then(data => {
            this.props.togglePreloader(false)
            this.props.setUsers(data.items)
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
                                   requestToFollowIdArray={this.props.requestToFollowIdArray}
                                   followRequester={this.props.followRequester}
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
    {follow, unfollow, setCurrentPage,
        setTotalUsers, setUsers, togglePreloader, followRequester})(UsersContainer);