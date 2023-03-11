
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { selectSearchField } from '../../store/search-field/search-field.selector';
import Article from "../article/article.component";
import LatestNews from "../latest-news/latest-news.component";

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    const searchField = useSelector(selectSearchField)
    const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        <div className="articles-preview">
            {
                filteredArticles.map((article) => (
                    <Article key={article.id} article={article} />
                ))
            }
            <LatestNews />
        </div>
    )
}

export default ArticlesPreview;