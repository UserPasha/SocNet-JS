import React from 'react';
import c from "../ProfileInfo.module.css";
import Contacts from "../Contacts/Contacts";

const Information = ({profile, isOwner, activate}) => {
    return (
        <>
            {isOwner&& <div><button onClick={activate}>Edit</button></div>}
            <div>
                <span className={c.request}>About me: </span>
                <span className={c.response}>{profile.aboutMe}</span>
            </div>
            <div>
                <span className={c.request}>Looking for a job: </span>
                <span className={c.response}>{profile.lookingForAJob? 'yes': 'no'}</span>
            </div>
            {profile.lookingForAJob && <div>
                <span className={c.request}>My skills: </span>
                <span className={c.response}>{profile.lookingForAJobDescription}</span>
            </div>}
            <div className={c.contacts}>
                Contacts:
            </div>
            {Object.keys(profile.contacts).map(m => {
                return <Contacts key={m} contactTitle={m} contactValue={profile.contacts[m]}/>
            })
            }
        </>
    );
};

export default Information;