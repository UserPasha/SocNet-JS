import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, MaxLengthIs10, requiredField} from "../../../utils/validation/validator";
import {TextArea} from "../../../common/Components/FormControls";


const MyPosts = React.memo((props)=> {

    const addPostFormMessage = (data) => {
        props.addNewPost(data.postText)
    }
    let postElement = props.posts.map(el => <Post key={el.id}
                                                  title={el.title}
                                                  likes={el.likes}
                                                  img={el.img}/>)

    return (
        <div className={c.postWrapper}>

            <div>
                New Post
            </div>
            <PostReduxForm onSubmit={addPostFormMessage}/>
            <div className={c.posts}>
                Posts
                {postElement}

            </div>
        </div>

    )
})

const PodstForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postText"} component={TextArea} placeholder={"Enter your message"}
                validate={[requiredField, MaxLengthIs10]}/>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "Post"})(PodstForm)

export default MyPosts;