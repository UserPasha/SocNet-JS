import React from 'react';
import c from "./Users.module.css"
import Pagination from "../../common/Components/Pagination";
import User from "./User";


const UsersPresentation = (
    {
        totalUsers,
        currentPage,
        onPageHandler,
        pageSize,
        users,
        followUser,
        unfollowUser,
        requestToFollowIdArray
    }) => {
    return (

        <div className={c.wrapper}>
            {
                users.map(m => <User key={m.id}
                                     user={m}
                                     requestToFollowIdArray={requestToFollowIdArray}
                                     followUser={followUser}
                                     unfollowUser={unfollowUser}
                    />
                )
            }
            <Pagination totalUsers={totalUsers}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageHandler={onPageHandler}
            />
        </div>
    );
};

export default UsersPresentation;