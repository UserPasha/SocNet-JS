import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authUserThunkCreator} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser()
        // usersAPI.authUser()
        //
        // axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
        //     {withCredentials: true}).then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, email, login} = response.data.data
        //         this.props.setAuthUserData(id, email, login)
        //
        //     }
        // })

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {authUser: authUserThunkCreator})(HeaderContainer)