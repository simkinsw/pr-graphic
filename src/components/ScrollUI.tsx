import "../views/mouseAnimation.css";
import { useRef } from "react";

interface ScrollUIProps {
    switchViews: () => void;
}

function ScrollUI( { switchViews }: ScrollUIProps) {

    const nodeRef = useRef(null);

    return (
        /*
        <div className={"scroll-ui"} onClick={switchViews}>
            <MouseIcon className="mouse-icon" />
            <DownArrowIcon className="down-arrow-icon"  />
        </div>
        */
        <div className="scroll-ui" ref={nodeRef}>
            <div className="mouse-icon"><div className="wheel"></div></div>
        </div>
    );
}

export default ScrollUI;