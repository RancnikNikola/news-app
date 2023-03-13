
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { selectSearchField } from '../../store/search-field/search-field.selector';
import { selectHamburger } from "../../store/hamburger/hamburger.selector";
import Article from "../article/article.component";
import LatestNews from "../latest-news/latest-news.component";
import CategoriesSideBar from "../categories-side-bar/categories-side-bar.component";
import './articles-preview.styles.scss';

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    const searchField = useSelector(selectSearchField)
    const filteredArticles = articles.filter(article => {
        return article.name.toLowerCase().includes(searchField.toLowerCase())
    })
    const isHamburgerOpen = useSelector(selectHamburger);

    return (
        <div className="nesto">
        {isHamburgerOpen && <CategoriesSideBar />}
        <div className="articles-preview">
           
            {<LatestNews className="articles-latest" />}
            {
                filteredArticles.map((article, idx) => (
                    <Article key={article.id} article={article} idx={idx} />
                ))
            }
          
        </div>
        </div>
    )
}

export default ArticlesPreview;