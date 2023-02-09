import { ReactComponent as CLMLogo } from "../assets/icons/clm-logo.svg";

function Sidebar() {

    return (
        <div className="sidebar">
            <a href="https://chicagomelee.com"><CLMLogo className="clm-logo" /></a>
            <div className="sidebar-text sidebar-pr">POWER RANKINGS</div>
            <div className="sidebar-text">FALL 2022</div>
        </div>
    )
}

export default Sidebar;