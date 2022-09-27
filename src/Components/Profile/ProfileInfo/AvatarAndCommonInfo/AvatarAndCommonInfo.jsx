import React from 'react';
import c from "../ProfileInfo.module.css";
import userPhoto from "../../../../common/images/User.png";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";

const AvatarAndCommonInfo = ({profile, status, updateStatus, isOwner, saveAvatar}) => {
    const loadAvatar = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    }
    return (
        <div className={c.avatar}>
            <img alt={"User Avatar"} src={profile.photos.large !== null ? profile.photos.large : userPhoto}/>
            {isOwner && <input type='file'
                               className={c.imageLoader}
                               onChange={loadAvatar}/>}
            <div>
                <span className={c.request}>Name: </span>
                <span className={c.response}>{profile.fullName}</span>
            </div>


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
};

export default AvatarAndCommonInfo;