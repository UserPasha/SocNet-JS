import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {

    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;