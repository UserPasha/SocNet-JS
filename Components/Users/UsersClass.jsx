import React from 'react';
import c from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../common/images/User.png"

class UsersClass extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
        })
    }
    onPageHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesOfgUsers = Math.ceil(this.props.totalUsers / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesOfgUsers; i++) {
            pages.push(i)
        }

        return (

            <div className={c.wrapper}>
                <div className={c.pagesCount}>
                    {pages.map(p => <span key={p}
                                          className={this.props.currentPage === p && c.selected}
                                          onClick={(e) => {
                                              this.onPageHandler(p)
                                          }}
                    >{p}</span>)}

                </div>
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