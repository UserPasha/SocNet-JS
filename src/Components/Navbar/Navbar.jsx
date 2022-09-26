import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={c.nav}>
            <div className={c.navItem} /*className={`${c.item} ${c.active}`}*/>
                <NavLink to="/profile" className={navData => navData.isActive ? c.active : c.item}>Profile</NavLink>
            </div>
            <div className={c.navItem}>
                <NavLink to="/messages" className={navData => navData.isActive ? c.active : c.item}>Messages</NavLink>
            </div>
            <div className={c.navItem}>
                <NavLink to="/news" className={navData => navData.isActive ? c.active : c.item}>News</NavLink>
            </div>

            <div className={c.navItem}>
                <NavLink to="/music" className={navData => navData.isActive ? c.active : c.item}>Music</NavLink>
            </div>
            <div className={c.navItem}>
                <NavLink to="/settings" className={navData => navData.isActive ? c.active : c.item}>Settings</NavLink>
            </div>
            <div className={c.navItem}>
                <NavLink to="/users" className={navData => navData.isActive ? c.active : c.item}>Users</NavLink>
            </div>
            <div className={`${c.navItem} ${c.big}`}>
                <NavLink to="/friends" className={navData => navData.isActive ? c.active : c.item}>Friends</NavLink>
                <div className={c.friends}>
                    <div className={c.friendsItem}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATJHQBYRITtS7_jWaOIWIAx8NxOp21sawew&usqp=CAU" alt="ava"/>
                        </div>
                        Alex
                    </div>
                    <div className={c.friendsItem}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliLTn8EKSJxBRQp9jWqbIOHDWw58Y3FQu3A&usqp=CAU" alt="ava"/>
                        </div>
                        Max
                    </div>
                    <div className={c.friendsItem}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1wseVy-El-8S1OjcigokHnB2p9b63UMBdw&usqp=CAU" alt="ava"/>
                        </div>
                        Ann
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;