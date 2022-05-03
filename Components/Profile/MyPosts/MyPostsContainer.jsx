import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*function MyPostsContainer(props) {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addNewPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updatePostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updatePostText={onPostChange}
                                addPost={addNewPost}
                                posts={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )

}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText:(text)=>{
            dispatch(updatePostTextActionCreator(text))
        },
        addNewPost: ()=>{
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;