import React, {useState} from 'react';
import c from "./ProfileInfo.module.css";
import Preloader from "../../../common/Components/Preloader";
import userPhoto from "../../../common/images/User.png";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import Contacts from "./Contacts/Contacts";
import Information from "./Information/Information";
import ProfileFormData from "./ProfileFormData/ProfileFormData";
import AvatarAndCommonInfo from "./AvatarAndCommonInfo/AvatarAndCommonInfo";


function ProfileInfo({
                         profile,
                         updateStatus,
                         status,
                         isOwner,
                         saveAvatar,
                         saveProfile
                     }) {

    const [mode, setMode] = useState(false)
    const activate = () => {
        setMode(true)
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setMode(false)
        })

    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={c.profileInfoWrapper}>
            <img
                src="https://images.unsplash.com/photo-1563547257011-054b1054e185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                alt="background-cover"/>
            <div className={c.content}>
                <AvatarAndCommonInfo profile={profile}
                                     status={status}
                                     updateStatus={updateStatus}
                                     isOwner={isOwner}
                                     saveAvatar={saveAvatar}/>

                <div className={c.information}>
                    {mode ?
                        <ProfileFormData initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        :
                        <Information profile={profile} isOwner={isOwner} activate={activate}/>}

                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileInfo;