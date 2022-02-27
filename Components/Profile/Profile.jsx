import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
//import {addPost} from "../../Redux/state";


function Profile(props) {

    return (
        <div className={c.contentWrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.state.postData}
                     addPost={props.addPost}/>

        </div>
    )
}

export default Profile;