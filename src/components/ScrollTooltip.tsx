import { ReactComponent as DownArrowIcon } from "../assets/icons/down-arrow-white.svg";

function ScrollTooltip() {
    return (
        <div className="read-more-tooltip-container">
            <div className="read-more-text">SCROLL FOR MORE</div>
            <DownArrowIcon className="read-more-icon" />
        </div>
    )
}

export default ScrollTooltip;