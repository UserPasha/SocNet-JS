import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authUserThunkCreator} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser()

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