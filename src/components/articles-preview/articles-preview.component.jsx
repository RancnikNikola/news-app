
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { selectSearchField } from '../../store/search-field/search-field.selector';
import { selectHamburger } from "../../store/hamburger/hamburger.selector";
import Article from "../article/article.component";
import LatestNews from "../latest-news/latest-news.component";
import CategoriesSideBar from "../categories-side-bar/categories-side-bar.component";
import CategoryMenu from '../category-menu/category-menu.component';
import { useParams } from "react-router-dom";
import './articles-preview.styles.scss';

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    const { category } = useParams()
    const searchField = useSelector(selectSearchField)
    // const filteredArticles = articles.filter(article => {
    //     return article.name.toLowerCase().includes(searchField.toLowerCase())
    // })
    const categoryItems = articles.filter(item => item.category === category);
    const isHamburgerOpen = useSelector(selectHamburger);

    return (
        <div className="nesto">
        <CategoryMenu />
        {isHamburgerOpen && <CategoriesSideBar />}
        <div className="articles-preview">
            {<LatestNews className="articles-latest" />}
            {
                category ?
                (categoryItems.map((article, idx) => (
                    <Article key={article.id} article={article} idx={idx} />
                ))) : (
                    articles.map((article, idx) => (
                        <Article key={article.id} article={article} idx={idx} />
                )))
            }
        </div>
        </div>
    )
}

export default ArticlesPreview;