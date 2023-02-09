import { Player } from "../types/player";
import PlayerSelectIcon from "./PlayerSelectIcon";

interface PlayerSelectProps{
    setActive: (p: Player) => void;
    players: Player[];
    activePlayer: Player;
}

function PlayerSelectRow( { setActive, players, activePlayer }: PlayerSelectProps) {

    return (
        <div className="player-select-row-container">
            {players.map((player, index) => {
                return <PlayerSelectIcon key={index} setActive={setActive} player={player} activePlayer={activePlayer} />
            })}
        </div>
    )
}

export default PlayerSelectRow;