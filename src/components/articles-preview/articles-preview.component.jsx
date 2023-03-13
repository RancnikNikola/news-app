
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { selectSearchField } from '../../store/search-field/search-field.selector';
import Article from "../article/article.component";
import LatestNews from "../latest-news/latest-news.component";
import './articles-preview.styles.scss';

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    const searchField = useSelector(selectSearchField)
    const filteredArticles = articles.filter(article => {
        return article.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        <div className="articles-preview">
            <LatestNews className="articles-latest" />
            {
                filteredArticles.map((article, idx) => (
                    <Article key={article.id} article={article} idx={idx} />
                ))
            }
          
        </div>
    )
}

export default ArticlesPreview;