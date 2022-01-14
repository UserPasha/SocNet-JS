import c from "./Navbar.module.css"
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={c.item}>
                <Link to="/messages">Messages</Link>
            </div>
            <div className={c.item}>
                <Link to="/news" >News</Link>
            </div>

            <div className={c.item}>
                <Link to="/music" >Music</Link>
            </div>
            <div className={c.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )
}

export default Navbar;