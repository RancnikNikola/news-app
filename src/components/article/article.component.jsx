import { useSelector, useDispatch } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { Link } from "react-router-dom";
import { setFavorites } from '../../store/favorites/favorite.action';
import { setBookmark } from '../../store/bookmark/bookmark.action';
import { selectFavorites } from "../../store/favorites/favorite.selector";
import { selectBookmarks } from '../../store/bookmark/bookmark.selector';
import './article.styles.scss';

const Article = ({ article }) => {

    const articles = useSelector(selectArticles);
    const favorites = useSelector(selectFavorites);
    const bookmarks = useSelector(selectBookmarks)
    const dispatch = useDispatch();

    const onClickFavorite = (articleId) => {
        const clickedArticle = articles.find(articles => {
            return articles.id === articleId
        })    
        dispatch(setFavorites([...favorites, clickedArticle]));
      }

    const onClickBookmark = (itemId) => {
        const clickedArticle = articles.find(articles => {
            return articles.id === itemId
        })
        const itemLocation = `${window.location.href}${clickedArticle.category}/${itemId}`;
        dispatch(setBookmark([...bookmarks, itemLocation]))  
    }

    return (
        <div className="article">
            <span>
                <Link to={`${article.category}/${article.id}`}>
                    {article.name}
                </Link>
            </span>
            <button onClick={() => onClickFavorite(article.id)}>Add to favorites</button>
            <button onClick={() => onClickBookmark(article.id)}>Bookmark</button>
        </div>
    )
}

export default Article;