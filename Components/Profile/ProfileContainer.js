import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){ userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterContainerProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithRouterContainerProfile);