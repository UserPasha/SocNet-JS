import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Redux/storeContext";


function MyPostsContainer(props) {

    //let state = props.store.getState()

    /* let addNewPost = () => {
         props.store.dispatch(addPostActionCreator())
     }
     let onPostChange = (text) => {
         let action = updatePostTextActionCreator(text)
         props.store.dispatch(action)
     }*/

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
    /*return (<MyPosts updatePostText={onPostChange}
                     addPost={addNewPost}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}/>)*/
}

export default MyPostsContainer;