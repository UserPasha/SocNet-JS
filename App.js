import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


function App(props) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/messages/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/*" element={<Profile/>}/>
                    {/*<Route path="/messages/*" element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/profile/*" element={<Profile store={props.store}/>}/>*/}
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>

                </Routes>
            </div>
        </div>

    );
}

export default App;
