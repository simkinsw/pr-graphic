import ArticleLink from "../components/ArticleLink";
import PlayerSelectBox from "../components/PlayerSelectBox";
import { Player } from "../types/player";

function SelectorView( { setActivePlayer, prData, activePlayer } : { setActivePlayer: (p: Player) => void, prData: Player[], activePlayer: Player }) {

    return (
        <div className = "selector-view">
            {<ArticleLink />}
            <div className="selector-container">
                <PlayerSelectBox setActive={setActivePlayer} players={prData} activePlayer={activePlayer} />
            </div>
        </div>
    );
}

export default SelectorView;