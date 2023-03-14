import { useSelector, useDispatch } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { Link } from "react-router-dom";
import { setFavorites } from '../../store/favorites/favorite.action';
import { setBookmark } from '../../store/bookmark/bookmark.action';
import { selectFavorites } from "../../store/favorites/favorite.selector";
import { selectBookmarks } from '../../store/bookmark/bookmark.selector';
import { BsBookmark } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import './article.styles.scss';

const Article = ({ article, idx }) => {

    const articles = useSelector(selectArticles);
    const favorites = useSelector(selectFavorites);
    const bookmarks = useSelector(selectBookmarks)
    const dispatch = useDispatch();

    const onClickFavorite = (articleId) => {
        const clickedArticle = articles.find(articles => {
            return articles.id === articleId
        })    
        dispatch(setFavorites([...favorites, clickedArticle]));
        alert('Added to favorites');
      }

    const onClickBookmark = (itemId) => {
        const clickedArticle = articles.find(articles => {
            return articles.id === itemId
        })
        const itemLocation = `${window.location.href}${clickedArticle.category}/${itemId}`;
        dispatch(setBookmark([...bookmarks, itemLocation]))  
        alert('Article bookmarked');
    }

    return (
        <div className="article">
            <img src={`https://source.unsplash.com/random/400x200/?img=${idx}`} alt="image" />
            <div className="article-text">
                <h4>{article.category}</h4>
                <span>
                    <Link to={`${article.category}/${article.id}`}>
                        {article.name}
                    </Link>
                </span>
                <p>{article.id}</p>
            </div>
            <div className="article-buttons">
                <MdFavoriteBorder className="favorite" onClick={() => onClickFavorite(article.id)} />
                <BsBookmark className="bookmark" onClick={() => onClickBookmark(article.id)} />
            </div>
        </div>
    )
}

export default Article;