import React from 'react';
import c from "./Users.module.css"
import userPhoto from "../../common/images/User.png";
import {NavLink} from "react-router-dom";




const UsersPresentation = (props) => {
    let pagesOfgUsers = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={c.wrapper}>
                <div className={c.pagesCount}>
                    {pages.map(p => <span key={p}
                                          className={props.currentPage === p && c.selected}
                                          onClick={(e) => {
                                              props.onPageHandler(p)
                                          }}
                    >{p}</span>)}

                </div>

                {
                    props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + m.id}>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto} alt={"profile avatar"}/>
                                </NavLink>
                        </div>
                        <div>
                            {m.followed
                                ?
                                <button disabled={props.requestToFollowIdArray.some(id => id === m.id)} onClick={() => {
                                    props.unfollowUser(m.id)
                                    // props.followRequester(true, m.id)
                                    // usersAPI.unfollowUser(m.id).then(data => {
                                    //     if (data.resultCode === 0) {
                                    //         props.unfollow(m.id)
                                    //     }
                                    //     props.followRequester(false, m.id)

                                    }}>Unfollow</button> :

                                <button disabled={props.requestToFollowIdArray.some(id => id === m.id)} onClick={() => {
                                    props.followUser(m.id)
                                    // props.followRequester(true, m.id)
                                    //
                                    // usersAPI.followUser(m.id).then(data => {
                                    //     if (data.resultCode === 0) {
                                    //         props.follow(m.id)
                                    //     }
                                    //     props.followRequester(false, m.id)



                                }}>follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>
                                {"m.location.country"}
                            </div>
                            <div>
                                {"m.location.city"}
                            </div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPresentation;