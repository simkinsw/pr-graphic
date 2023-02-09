import { useEffect, useState } from "react";
import PlayerBlurb from "../components/PlayerBlurb";
import RecentResults from "../components/RecentResults";
import SummaryData from "../components/SummaryData";
import { Player } from "../types/player";

function FocusedView( { activePlayer, setBlurbHovered, isMobile } : { activePlayer: Player, setBlurbHovered: (b: boolean) => void, isMobile: boolean }) {

    const [scrollable, setScrollable] = useState(false);

   useEffect(() => {
        if(isMobile) return;
        const scrollContainer = document.getElementById("scroll-container");
        setScrollable(scrollContainer!.scrollHeight > scrollContainer!.clientHeight);
   }, [activePlayer, isMobile])

    return (
        <div className="focused-container">
            
            {!!activePlayer &&
            !isMobile ? 
            <>
                <SummaryData player={activePlayer} />
                <div className="scroll-container" id="scroll-container" onMouseEnter={() => setBlurbHovered(scrollable)} onMouseLeave={() => setBlurbHovered(false)}>
                    <RecentResults player={activePlayer} />
                    <PlayerBlurb player={activePlayer}  />
                </div>
            </>
            :
            <>
                <SummaryData player={activePlayer} />
                <RecentResults player={activePlayer} />
                <PlayerBlurb player={activePlayer}  />
            </>
            }
        </div> 
    );
}

export default FocusedView;