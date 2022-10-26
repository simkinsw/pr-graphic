import { ReactComponent as CLMLogo } from "../assets/icons/clm-logo.svg";

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <CLMLogo className="clm-logo" />
                <div className="sidebar-text">POWER RANKINGS</div>
            </div>
            <div className="sidebar-text">SUMMER 2022</div>
        </div>
    )
}

export default Sidebar;