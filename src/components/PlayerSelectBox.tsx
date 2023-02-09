import { Player } from "../types/player";
import PlayerSelectRow from "./PlayerSelectRow";

interface PlayerSelectProps{
    setActive: (p: Player) => void;
    players: Player[];
    activePlayer: Player;
}

function PlayerSelectBox( { setActive, players, activePlayer }: PlayerSelectProps) {
    
    return (
        <div className="player-select-box-container">
            <PlayerSelectRow setActive={setActive} players={players.slice(0, 5)} activePlayer={activePlayer} />
            <PlayerSelectRow setActive={setActive} players={players.slice(5, 10)} activePlayer={activePlayer} />
            <PlayerSelectRow setActive={setActive} players={players.slice(10, 15)} activePlayer={activePlayer} />
        </div>
    );
}

export default PlayerSelectBox;