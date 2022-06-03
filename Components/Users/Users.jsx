import React from 'react';
import c from "./Users.module.css"
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../common/images/User.png"

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
        /* props.setUsers([{
             id: v1(),
             photoURL: "https://image.shutterstock.com/image-vector/logistic-company-vector-logo-arrow-260nw-643639804.jpg",
             fullName: "Grigory Lermontov",
             followed: false,
             status: "active",
             location: {country: "Belarus", city: "Minsk"}
         },
             {
                 id: v1(),
                 photoURL: "https://image.shutterstock.com/image-vector/symbol-gas-oil-drop-made-260nw-209923879.jpg",
                 fullName: "Elena Katina",
                 followed: false,
                 status: "im learn something...",
                 location: {country: "Belarus", city: "Hrodno"}
             },
             {
                 id: v1(),
                 photoURL: "https://image.shutterstock.com/image-vector/logistic-company-vector-logo-arrow-260nw-643639804.jpg",
                 fullName: "Vasiliy Smolov",
                 followed: true,
                 status: "buy a car",
                 location: {country: "Belarus", city: "Minsk"}
             },])*/
    }

    return (

        <div className={c.wrapper}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {m.followed
                                ?
                                <button onClick={() => props.unfollow(m.id)}>Follow</button>
                                :
                                <button onClick={() => props.follow(m.id)}>Unfollow</button>}
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
    );
};

export default Users;