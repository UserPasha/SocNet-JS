import c from "./Header.module.css"
import {NavLink} from "react-router-dom";
function Header(props) {
    return (
        <header className={c.header}>
            <img
                src="https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s800-c-k-c0x00ffffff-no-rj"
                alt="logo"/>
            <div className={c.login}>
                {props.isAuth? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;