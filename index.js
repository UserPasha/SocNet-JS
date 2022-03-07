import stateR, {subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateMessageText, updatePostText} from "./Redux/state";


 let rerenderEntireTree = (stateR) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App stateA={stateR}
                     addPost={addPost}
                     addMessage={addMessage}
                     updatePostText={updatePostText}
                     updateMessageText={updateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(stateR);

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
