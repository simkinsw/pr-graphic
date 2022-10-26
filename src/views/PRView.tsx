import PlayerPreview from "../components/PlayerPreview";
import PlayerSelectBox from "../components/PlayerSelectBox";
import logo from "../assets/icons/clm-logo-stroke.svg";
import "./PRView.css";
import "./PlayerSelector.css";
import "./FocusedView.css";
import Sidebar from "../components/Sidebar";
import ScrollUI from "../components/ScrollUI";
import ArticleLink from "../components/ArticleLink";
import { Player } from "../types/player";
import { useState } from "react";
import SummaryData from "../components/SummaryData";
import RecentResults from "../components/RecentResults";
import PlayerBlurb from "../components/PlayerBlurb";
import ScrollTooltip from "../components/ScrollTooltip";

function PRView( { prData } : { prData: Player[] }) {

    const [activePlayer, setActivePlayer] = useState<Player>();
    const [playerFocused, setPlayerFocused] = useState<boolean>(false);

    function switchViews() {
        if(!playerFocused) {
            setPlayerFocused(!!activePlayer);
        } else {
            setPlayerFocused(false);
        }
    }
    
    return (
        <div className="pr-view-container">
            <div className="pr-view-left" style={{ backgroundImage: `url(${logo})` }}>
                <Sidebar />
                <PlayerPreview player={activePlayer} />
                <ScrollUI top={playerFocused} switchViews={switchViews}/>
            </div>
            <div className="pr-view-right">
                {!playerFocused ? (
                <div className="selector-container">
                    <ArticleLink />
                    <PlayerSelectBox setActive={setActivePlayer} players={prData} />
                </div>
                ) : ( 
                <div className="focused-container">
                    <SummaryData player={activePlayer!} />
                    <div className="scroll-container">
                        <RecentResults player={activePlayer!} />
                        <PlayerBlurb player={activePlayer!} />
                    </div>
                    <ScrollTooltip />
                </div> 
                )}
            </div>
        </div>
    )
}

export default PRView;