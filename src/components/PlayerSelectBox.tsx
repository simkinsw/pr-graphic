import { Player } from "../types/player";
import PlayerSelectRow from "./PlayerSelectRow";

interface PlayerSelectProps{
    setActive: (p: Player) => void;
    players: Player[];
}

function PlayerSelectBox( { setActive, players }: PlayerSelectProps) {
    
    return (
        <div className="player-select-box-container">
            <PlayerSelectRow setActive={setActive} players={players.slice(0, 5)} />
            <PlayerSelectRow setActive={setActive} players={players.slice(5, 10)} />
            <PlayerSelectRow setActive={setActive} players={players.slice(10, 15)} />
        </div>
    );
}

export default PlayerSelectBox;