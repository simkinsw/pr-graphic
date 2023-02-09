import { Player } from "../types/player";

interface PlayerSelectProps{
    setActive: (p: Player) => void;
    player: Player;
    activePlayer: Player
}

function PlayerSelectIcon( { setActive, player, activePlayer }: PlayerSelectProps) {

    function clickHandler() {
        setActive(player);
    }

    const active = activePlayer === player ? " active" : "";
    const longName = player.tag.length >= 9;

    return (
        <div onClick={clickHandler} className={"player-select-icon-container" + active}>
            <div className="player-select-icon-image-container">
                <img className={"player-select-icon-image" + active} src={`https://chicagomelee.com/wp-content/uploads/fall-pr-images/${player.tag.replace("?", "").replace(" ", "-")}.png`} alt="" />
            </div>
            <div className="player-select-icon-text">
                <div className="player-select-icon-rank">
                    <div className="player-select-icon-rank-num">{player.rank}</div>
                </div>
                <div className={`player-select-icon-name player-select-icon-name-${longName}`}>
                    {player.tag}
                </div>
            </div>
        </div>
    )
}

export default PlayerSelectIcon;