import { Player } from "../types/player";

function PlayerBlurb( { player } : { player: Player }) {
    return (
        <div className="blurb">
            {player.blurb.map((paragraph, index) => {
                return (
                    <div key={index} className="blurb-paragraph">{paragraph}</div>
                );
            })}
        </div>
    )
}

export default PlayerBlurb;