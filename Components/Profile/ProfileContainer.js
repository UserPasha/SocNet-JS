import React from 'react'
import Profile from "./Profile";
import { userProfileThunkCreator} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){ userId = 2}
        this.props.userProfile(userId)
        }


    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

})

let WithRouterContainerProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
userProfile: userProfileThunkCreator})(WithRouterContainerProfile);