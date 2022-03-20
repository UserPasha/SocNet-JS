import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"



function Profile(props) {

    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.state.postData}
                     newPostText={props.state.newPostText}
                    dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;