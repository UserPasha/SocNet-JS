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
                    <Route path="/messages" element={<Dialogs name={props.name} id={props.id} message={props.message}/>}/>
                    <Route path="/profile" element={<Profile title={props.title} likes={props.likes} img={props.img}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>

                </Routes>
            </div>
        </div>

    );
}

export default App;
