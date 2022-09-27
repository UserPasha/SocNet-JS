import React from 'react'
import Profile from "./Profile";
import {
    getProfileStatusThunkCreator, saveImageTC, saveProfileTC,
    updateProfileStatusThunkCreator,
    userProfileThunkCreator
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userdataId
        }
        this.props.userProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     saveAvatar={this.props.saveAvatar}
                     saveProfile={this.props.saveProfile}/>
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
        updateStatus: updateProfileStatusThunkCreator,
        saveAvatar: saveImageTC,
        saveProfile: saveProfileTC
    }),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)

