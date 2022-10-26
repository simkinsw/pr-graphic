import { ReactComponent as MouseIcon } from "../assets/icons/mouse-icon.svg";
import { ReactComponent as DownArrowIcon } from "../assets/icons/down-arrow.svg";
import { ReactComponent as UpArrowIcon } from "../assets/icons/up-arrow.svg";

interface ScrollUIProps {
    top: boolean;
    switchViews: () => void;
}

function ScrollUI( { top, switchViews }: ScrollUIProps) {
    return (
        top ? (
            <div className={"scroll-ui-top"} onClick={switchViews}>
                <UpArrowIcon className="up-arrow-icon"  />
                <MouseIcon className="mouse-icon" />
            </div>
        ) : (
            <div className={"scroll-ui-bottom"} onClick={switchViews}>
                <MouseIcon className="mouse-icon" />
                <DownArrowIcon className="down-arrow-icon"  />
            </div>
        )
    );
}

export default ScrollUI;