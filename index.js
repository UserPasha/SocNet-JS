import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, NavLink} from "react-router-dom";
import Post from "./Components/Profile/MyPosts/Post/Post";
import c from "./Components/Dialogs/Dialogs.module.css";

const postData = [
    {id: 1, title: "yo!", likes: "20 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"},
    {id: 1, title: "hey!", likes: "30 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUhrgutc0KGdPsVqtYabKuqq0m4NDoutU-g&usqp=CAU"}

]
let postElement = postData.map(el =>  <Post title={el.title} likes={el.likes} img={el.img}/>)

const dialogData = [
    {name: "Pasha", id: "1"},
    {name: "Sasha", id: "2"},
    {name: "Masha", id: "3"},
    {name: "Svetlana", id: "4"},
    {name: "Dasha", id: "5"},
]
const Dialog = (props) => {
    let path = "/messages/" + props.id
    return <div className={/*c.userDialog+''+*/c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
let DialogsElements = dialogData.map(el => <Dialog name={el.name} id={el.id}/>)

const messagesData = [
    {message: "Hi!", id: "1"},
    {message: "Man!", id: "2"},
    {message: "Yo!", id: "3"},

]
const Message = (props) => {

    return <div className={c.message}>{props.message}</div>
}

let MessageElements = messagesData.map(el => <Message message={el.message} id={el.id}/>)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App title={postElement} name={DialogsElements} message={MessageElements}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
