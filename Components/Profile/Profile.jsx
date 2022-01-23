import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Post from "./MyPosts/Post/Post";



function Profile(props) {
    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPosts title={props.title} likes={props.likes} img={props.img}/>
        </div>
    )
}

export default Profile;