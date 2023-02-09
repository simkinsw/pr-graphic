import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter-icon.svg";
import { Player } from "../types/player";
import "../views/animation.css";

function PlayerPreview({ player, isMobile }: { player: Player | undefined, isMobile: boolean }) {

    const [random, setRandom] = useState<number>(Math.random());

    useEffect(() => {
        setRandom(Math.random());
    }, [player])

    const longName = (player?.tag.length ?? 0) >= 10;

    return (
        player ? 
            <div className="player-preview-container">
                <TransitionGroup>
                <CSSTransition
                    key={player.rank}
                    timeout={800}
                    classNames="statue"
                >
                    <div className="player-preview-statue-container" style={{transitionDelay: `200ms`}}>
                        {<img className="player-preview-statue-image" src={`https://github.com/simkinsw/pr-images/blob/71153f83bb7775bca0a55019291420b0f2fbab46/22-fall/${player.tag.replace("?", "").replace(" ", "-")}.gif?raw=true?a=`+random} alt="" />}
                    </div>
                </CSSTransition>
                </TransitionGroup>
                <div className="player-preview-text">
                        <TransitionGroup>
                        <CSSTransition
                            key={player.rank}
                            timeout={600}
                            classNames="leaveright"
                        >
                            <div className="player-preview-real-name">{player.realName.toUpperCase()}</div>
                        </CSSTransition>
                        </TransitionGroup>
                        <TransitionGroup>
                        <CSSTransition
                            key={player.rank}
                            timeout={600}
                            classNames="leaveleft"
                        >
                            <div className={`player-preview-tag player-preview-tag-${longName}`}>{player.tag.toUpperCase()}</div>
                        </CSSTransition>
                        </TransitionGroup>
                        
                        {!!player.twitterHandle &&
                        <TransitionGroup>
                        <CSSTransition
                            key={player.rank}
                            timeout={600}
                            classNames="leaveright"
                        >
                            <div className="player-preview-twitter">
                                <a href={`https://twitter.com/${player.twitterHandle}`} target="_blank" rel="noreferrer noopener">
                                    <TwitterIcon className="twitter-icon" />
                                    <span className="player-preview-twitter-handle">{player.twitterHandle.toUpperCase()}</span>
                                </a>
                            </div>
                        </CSSTransition>
                        </TransitionGroup>
                        }

                        <TransitionGroup>
                        <CSSTransition
                            key={player.rank}
                            timeout={10000}
                            classNames="leaveleft"
                        >
                            <div className="player-preview-rank"><span className="number-sign">#</span>{player.rank}</div>
                        </CSSTransition>
                        </TransitionGroup>
                        
                    </div>
                    
            </div>
            :
            <div className="player-preview-container"></div>
    );
}

export default PlayerPreview