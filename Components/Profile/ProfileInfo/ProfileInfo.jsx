import React from 'react';
import c from "./ProfileInfo.module.css";
import Preloader from "../../../common/Components/Preloader";
import userPhoto from "../../../common/images/User.png";

function ProfileInfo(props) {
    if(!props.profile){
        return<Preloader/>
    }
    return (
        <div className={c.profileInfoWrapper}>
            <img
                src="https://images.unsplash.com/photo-1563547257011-054b1054e185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                alt="background-cover"/>
            <div className={c.content}>
                <div>
                    <img alt={"User Avatar"} src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}/>
                    <div>
                        <span className={c.name}>{props.profile.fullName}</span>
                    </div>
                    <div>
                        <span>{props.profile.aboutMe}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;