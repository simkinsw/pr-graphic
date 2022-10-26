import { ReactComponent as RightArrowIcon } from "../assets/icons/right-arrow.svg";

function ArticleLink() {

    return (
        <a href="placeholder.com">
            <div className="article-link">
                <div className="article-link-text">READ THE ARTICLE</div>
                <RightArrowIcon className="right-arrow" />
            </div>
        </a>
    )
}

export default ArticleLink;