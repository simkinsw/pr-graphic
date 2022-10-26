import { Player } from "../types/player";

function SummaryData ( {player} : {player: Player}) {
    return (
        <div className="summary-data-container">
            <div className="summary-data-entry">
                <div className="summary-data-header">VOTER AVG</div>
                <div className="summary-data-value">{player.voterAverage}</div>
            </div>
            <div className="summary-data-entry">
                <div className="summary-data-header">WIN-LOSS</div>
                <div className="summary-data-value">{player.winLoss}</div>
            </div>
            <div className="summary-data-entry">
                <div className="summary-data-header">PR EVENTS</div>
                <div className="summary-data-value">{player.prEvents}</div>
            </div>

        </div>
    );
}

export default SummaryData;