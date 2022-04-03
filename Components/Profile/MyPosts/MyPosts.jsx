import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";

//import {addPost} from "../../../Redux/state";


function MyPosts(props) {
    let postElement = props.posts.map(el => <Post key={el.id} title={el.title} likes={el.likes} img={el.img}/>)
    let newPostElement = React.createRef()
    let addNewPost = () => {
       // props.addPost()
        props.dispatch(addPostActionCreator())
    }
    let onPostChange=()=>{
        let text = newPostElement.current.value
       // props.updatePostText(text)
        //let action = {type: "UPDATE-POST-TEXT", newText: text};
        props.dispatch(updatePostTextActionCreator(text))
    }
    return (

        <div className={c.postWrapper}>

            <div>
                New Post
            </div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addNewPost}>ADD</button>
            </div>
            <div className={c.posts}>
                Posts
                {postElement}

            </div>
        </div>

    )
}

export default MyPosts;