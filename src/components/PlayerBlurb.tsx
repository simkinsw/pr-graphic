import { Player } from "../types/player";

function PlayerBlurb( { player } : { player: Player }) {
    return (
        <div className="blurb">
            {
                player.blurbAuthor === "larfen" ?     
                <a href="https://twitter.com/BigLarf" target="_blank" rel="noreferrer">
                    <div className="blurb-author">by Evan "Larfen" Himes</div>
                </a>
                : player.blurbAuthor === "tenacity" ?
                <a href="https://twitter.com/tenacityok" target="_blank" rel="noreferrer">
                    <div className="blurb-author">by Kevin "tenacity" Donnelly</div>
                </a>
                :
                <a href="https://twitter.com/wusstunes" target="_blank" rel="noreferrer">
                    <div className="blurb-author">by Matthew "Dr. Hunk" Koester</div>
                </a>
            }
            {player.blurb.map((paragraph, index) => {
                return (
                    <div key={index} className="blurb-paragraph">{paragraph}</div>
                );
            })}
        </div>
    )
}

export default PlayerBlurb;