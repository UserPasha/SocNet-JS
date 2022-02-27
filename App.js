import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";





function App(props) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/messages/*" element={<Dialogs state={props.stateA.dialogsPage}
                                                                newMessageText={props.stateA.dialogsPage.newMessageText}
                                                                updateMessageText={props.updateMessageText}
                                                                addMessage={props.addMessage}/>}/>
                    <Route path="/profile/*" element={<Profile state={props.stateA.profilePage}
                                                               updatePostText={props.updatePostText}
                                                               addPost={props.addPost}/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>

                </Routes>
            </div>
        </div>

    );
}

export default App;
