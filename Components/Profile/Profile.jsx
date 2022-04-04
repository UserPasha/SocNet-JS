import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {

    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>
    )
}

export default Profile;