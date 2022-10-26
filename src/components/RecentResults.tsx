import { Player } from "../types/player";

function RecentResults( { player } : { player: Player }) {

    return (
        <div className="recent-results-container">
            {player.placements.map((placement, index) => {
                const placingNum = placement.placing.slice(0, placement.placing.length - 2);
                const suffix = placement.placing.slice(placement.placing.length - 2);
                return (
                    <div key={index} className="recent-result">
                        <div className="recent-result-placing">{placingNum}<div className="recent-result-placing-suffix">{suffix}</div></div>
                        <div className="recent-result-event"> / {placement.event}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default RecentResults;