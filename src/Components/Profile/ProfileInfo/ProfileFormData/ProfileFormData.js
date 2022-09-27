import React from 'react';
import {Field, reduxForm} from "redux-form";
import c from "../ProfileInfo.module.css";
import {Input} from "../../../../common/Components/FormControls";
import Contacts from "../Contacts/Contacts";

const ProfileFormData = ({ profile, handleSubmit, onSubmit, error}) => {

    return (
     <form onSubmit={handleSubmit}>
         <button>save</button>
         {error && <div className={c.formError}>
             {error}
         </div>}
         <div>
             <span className={c.request}>Full Name: </span>
             <span className={c.response}><Field placeholder={'Full name'}
                                                 name={'fullName'}
                                                 component={Input}/>
             </span>
         </div>
         <div>
             <span className={c.request}>About me: </span>
             <span className={c.response}><Field placeholder={'About me'}
                                                 name={'aboutMe'}
                                                 component={Input}/>
             </span>
         </div>
         <div>
             <span className={c.request}>Looking for a job: </span>
             <span className={c.response}><Field type={'checkbox'}
                                                 name={'lookingForAJob'}
                                                   component={Input}/>
             </span>
         </div>
         <div>
             <span className={c.request}>My skills: </span>
             <span className={c.response}><Field placeholder={'Skills'}
                                                 name={'lookingForAJobDescription'}
                                                 component={Input}/>
             </span>
         </div>
         <div className={c.contacts}>
             Contacts:
         </div>
         {Object.keys(profile.contacts).map(m => {
             return <div key={m}>
                 <span className={c.request}>{m}: <Field placeholder={m}
                                                         name={`contacts.${m}`}
                                                         component={Input}/>
                 </span>
                 {/*<span className={c.response}>{profile.contacts[m]}</span>*/}
             </div>
         })
         }
     </form>
    );
};
const ProfileFormDataWithReduxForm = reduxForm({form: 'edit-profile'})(ProfileFormData)

export default ProfileFormDataWithReduxForm;