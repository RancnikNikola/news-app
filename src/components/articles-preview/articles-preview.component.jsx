
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import Article from "../article/article.component";

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    console.log(articles);

    return (
        <div className="articles-preview">
            {
                articles.map((article) => (
                    <Article key={article.id} article={article} />
                ))
            }
        </div>
    )
}

export default ArticlesPreview;