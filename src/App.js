import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
//import DialogsContainer from "./Components/Dialogs/DialogsContainer";
//import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./common/Components/Login";
import {Component, Suspense,lazy} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Components/Preloader";
const UsersContainer = lazy(()=>import("./Components/Users/UsersContainer"))
const DialogsContainer = lazy(()=>import("./Components/Dialogs/DialogsContainer"))
//import Preloader from "./common/Components/Preloader";


class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) =>{
alert('some error occurred')
        //dispatch
    }
    componentDidMount() {
        this.props.initialize()
window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        // if (!this.props.isInitialize) {
        //     return <Preloader / >
        //         }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Switch>
                            <Redirect exact from='/' to={ProfileContainer}/>
                    <Route path="/messages" component={DialogsContainer}/>
                    <Route path="/profile/:userId?" component={ProfileContainer}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/login" component={Login}/>
                            <Route path='*' render={()=><div>Page not found</div>}/>
                        </Switch>
                    </Suspense>
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
