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


function App(props) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path="/messages" component={DialogsContainer}/>
                    <Route path="/profile/:userId?" component={ProfileContainer}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
