import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Profile() {
    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;