import c from "./Header.module.css"
function Header() {
    return (
        <header className={c.header}>
            <img
                src="https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s800-c-k-c0x00ffffff-no-rj"
                alt="logo"/>
        </header>
    )
}

export default Header;