import { useSelector, useDispatch } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { Link } from "react-router-dom";
import { setFavorites } from '../../store/favorites/favorite.action';
import { setBookmark } from '../../store/bookmark/bookmark.action';
import { selectFavorites } from "../../store/favorites/favorite.selector";
import { selectBookmarks } from '../../store/bookmark/bookmark.selector';

const Article = ({ article }) => {

    const articles = useSelector(selectArticles);
    const favorites = useSelector(selectFavorites);
    const bookmarks = useSelector(selectBookmarks)
    const dispatch = useDispatch();

    const onClickFavorite = (articleId) => {
        const artId = articles[articleId];
        dispatch(setFavorites([...favorites, artId]));
      }

    const onClickBookmark = (itemId) => {
         const itemLocation = `${window.location.href}${articles[itemId].category}/${itemId}`;
         dispatch(setBookmark([...bookmarks, itemLocation]))
    }

    return (
        <div className="article">
            <span>
                <Link to={`${article.category}/${article.id}`}>
                    {article.title}
                </Link>
            </span>
            <button onClick={() => onClickFavorite(article.id -1 )}>Add to favorites</button>
            <button onClick={() => onClickBookmark(article.id)}>Bookmark</button>
        </div>
    )
}

export default Article;