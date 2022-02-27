import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
//import {addPost} from "../../../Redux/state";



function MyPosts(props) {
    let postElement = props.posts.map(el => <Post key={el.id} title={el.title} likes={el.likes} img={el.img}/>)
    let newPostElement = React.createRef()
    let addNewPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""
    }
    return (

        <div className={c.postWrapper}>

            <div>
                New Post
            </div>
            <div>
                <textarea ref={newPostElement}> </textarea>
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