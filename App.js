import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./common/Components/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Components/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initialize()

    }

    render() {
        if (!this.props.isInitialize) {
            return <Preloader / >
                }

                return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path="/messages" component={DialogsContainer}/>
                        <Route path="/profile/:userId?" component={ProfileContainer}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/news" component={News}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/login" component={Login}/>

                    </div>
                </div>
                );
                }
                }

                const mapStateToProps = (state) => ({
                isInitialize: state.app.isInitialize
            })

                export default compose(
                connect(mapStateToProps, {initialize: initializeApp}),
                withRouter
                )
                (App);
