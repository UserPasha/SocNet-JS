import React from 'react';
import c from "./Users.module.css"
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../common/images/User.png"

class UsersClass extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (

            <div className={c.wrapper}>
                {/* <button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {m.followed
                                ?
                                <button onClick={() => this.props.unfollow(m.id)}>Follow</button>
                                :
                                <button onClick={() => this.props.follow(m.id)}>Unfollow</button>}
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
}

export default UsersClass;