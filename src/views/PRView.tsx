import "./PRView.css";
import "./PlayerSelector.css";
import "./FocusedView.css";
import PlayerPreview from "../components/PlayerPreview";
import Sidebar from "../components/Sidebar";
import ScrollUI from "../components/ScrollUI";
import { Player } from "../types/player";
import SelectorView from "./SelectorView";
import FocusedView from "./FocusedView";
import { useEffect, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

let scrolled = false;

function PRView( { prData } : { prData: Player[] }) {

    const [activePlayer, setActivePlayer] = useState<Player>(prData[0]);
    const [playerFocused, setPlayerFocused] = useState<boolean>(false);
    const [blurbHovered, setBlurbHovered] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [scrollIconVisible, setScrollIconVisible] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

    }, [width]);

    const isMobile = width <= height || width < 640;

    function switchViews() {
        if(!playerFocused) {
            scrolled = true;
            setScrollIconVisible(false);
            setPlayerFocused(!!activePlayer);
        } else {
            setPlayerFocused(false);
        }
    }

    function iconClicked(p: Player) {
        setActivePlayer(p);
        if(!scrolled) {
            setScrollIconVisible(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if(!scrolled) {
                setScrollIconVisible(true);
            }
        }, 5000);
    }, []);


    return (
        !isMobile ? (
        <ReactScrollWheelHandler
        upHandler={(e) => { if(!blurbHovered) setPlayerFocused(false) }}
        downHandler={(e) => {
            setPlayerFocused(!!activePlayer)
            scrolled = true;
            setScrollIconVisible(false);
        }}
        >
            <div className="pr-view-container">

                <div className="pr-view-left">
                    <div className="background-logo-container">
                        <img className="background-logo" src="https://chicagomelee.com/wp-content/uploads/clm-logo-stroke-orange.svg" alt=""></img>
                    </div>  
                    <Sidebar />
                    <PlayerPreview player={activePlayer} isMobile={false} />
                </div>

                {scrollIconVisible && !scrolled && <ScrollUI switchViews={switchViews} />}
                
                <div className={playerFocused ? "pr-view-right scrolled-down" : "pr-view-right scrolled-up"}>
                    <SelectorView setActivePlayer={iconClicked} prData={prData} activePlayer={activePlayer} />
                    <FocusedView activePlayer={activePlayer!} setBlurbHovered={setBlurbHovered} isMobile={false} />
                </div>

            </div>
        </ReactScrollWheelHandler>
        ) : (

        <div className="pr-view-container">
            <SelectorView setActivePlayer={setActivePlayer} prData={prData} activePlayer={activePlayer} />
            <div className="pr-view-left">
                <Sidebar />
                <div className="background-logo-container">
                    <img className="background-logo" src="https://github.com/simkinsw/pr-images/blob/d4a2cf1449ff89bcfd9dfcd0caeff5fc51d4d9da/22-fall/clm-logo-stroke.svg" alt=""></img>
                </div>  
                
                <PlayerPreview player={activePlayer} isMobile={true} />
            </div>
            { !!activePlayer && <FocusedView activePlayer={activePlayer!} setBlurbHovered={() => {}} isMobile={true} /> }
        </div>

        )
    )
}

export default PRView;