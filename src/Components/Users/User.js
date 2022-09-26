import React from 'react';
import c from "./Users.module.css"
import userPhoto from "../../common/images/User.png";
import {NavLink} from "react-router-dom";

const User = ({user, requestToFollowIdArray, unfollowUser, followUser}) => {

    return (
        <div className={c.wrapper}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                                   <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                        alt={"profile avatar"}/>
                    </NavLink>
                </div>
                      <div>
                            {user.followed
                                ?
                                <button disabled={requestToFollowIdArray.some(id => id === user.id)} onClick={() => {
                                    unfollowUser(user.id)

                                }}>Unfollow</button> :

                                <button disabled={requestToFollowIdArray.some(id => id === user.id)} onClick={() => {
                                    followUser(user.id)

                                }}>follow</button>}
                      </div>
            </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>
                                {"user.location.country"}
                            </div>
                            <div>
                                {"user.location.city"}
                            </div>
                        </span>
                    </span>
        </div>
    );
};

export default User;