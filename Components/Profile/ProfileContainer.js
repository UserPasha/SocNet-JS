import React from 'react'
import Profile from "./Profile";
import {
    getProfileStatusThunkCreator,
    updateProfileStatusThunkCreator,
    userProfileThunkCreator
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userdataId
        }
        this.props.userProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userdataId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {
        userProfile: userProfileThunkCreator,
        getStatus: getProfileStatusThunkCreator,
        updateStatus: updateProfileStatusThunkCreator
    }),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)

