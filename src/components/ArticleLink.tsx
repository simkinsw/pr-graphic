import { ReactComponent as RightArrowIcon } from "../assets/icons/right-arrow.svg";

function ArticleLink() {

    return (
        <a href="https://chicagomelee.com/clm-fall-2022-power-rankings/" target="_blank" rel="noreferrer">
            <div className="article">
                <div className="article-link">
                    <div className="article-link-text">READ THE ARTICLE</div>
                    <RightArrowIcon className="right-arrow" />
                </div>
            </div>
        </a>
    )
}

export default ArticleLink;