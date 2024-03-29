import React from 'react'
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={c.contentWrapper}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveAvatar={props.saveAvatar}
                         saveProfile={props.saveProfile}/>

            <MyPostsContainer/>
        </div>
    )

}

export default Profile;