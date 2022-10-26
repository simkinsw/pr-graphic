import { Player } from "../types/player";

interface PlayerSelectProps{
    setActive: (p: Player) => void;
    player: Player;
}

function PlayerSelectIcon( { setActive, player }: PlayerSelectProps) {

    function clickHandler() {
        setActive(player);
    }

    return (
        <div onClick={clickHandler} className="player-select-icon-container" >
            <div className="player-select-icon-text">
                <div className="player-select-icon-rank">
                    {player.rank}
                </div>
                <div className="player-select-icon-name">
                    {player.tag}
                </div>
            </div>
        </div>
    )
}

export default PlayerSelectIcon;