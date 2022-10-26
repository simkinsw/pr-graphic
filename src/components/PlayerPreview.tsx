import { ReactComponent as TwitterIcon } from "../assets/icons/twitter-icon.svg";
import { Player } from "../types/player";

function PlayerPreview({ player }: { player: Player | undefined }) {
    return (
        player ? 
            <div className="player-preview-container" style={{ backgroundImage:`url(/images/${player.character}-statue.png)` }}>
                <div className="player-preview-text">
                    <div className="player-preview-real-name">{player.realName.toUpperCase()}</div>
                    <div className="player-preview-tag">{player.tag.toUpperCase()}</div>
                    <div className="player-preview-twitter">
                        <TwitterIcon className="twitter-icon" />
                        <span className="player-preview-twitter-handle">{player.twitterHandle.toUpperCase()}</span>
                    </div>
                    <div className="player-preview-rank"><span className="number-sign"></span>{player.rank}</div>
                </div>
            </div>
            :
            <div className="player-preview-container"></div>
    );
}

export default PlayerPreview