import React from 'react'
import Profile from "./Profile";
import {userProfileThunkCreator} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.userProfile(userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} />
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {
        userProfile: userProfileThunkCreator
    }),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)

