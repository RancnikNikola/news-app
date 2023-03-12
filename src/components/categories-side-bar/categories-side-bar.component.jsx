import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import CategorySideBarItems from "../category-side-bar-items/category-side-bar-items.component";
import { Link } from "react-router-dom";
import './categories-side-bar.styles.scss';

const CategoriesSideBar = () => {

    const articles = useSelector(selectArticles);

    const getCategories = () => {
        const newArray = [];
        articles.map((article) => {
            newArray.push(article.category)
        })
        return Array.from(new Set(newArray));
    }

    const categories = getCategories();

    return (
        <div className="categories-preview">
            {
                categories.map((category, id) => (
                    <CategorySideBarItems key={id} category={category} />
                ))
            }
            <span>
                <Link to='/favorites'>Favorites</Link>
            </span>
            <span>
                <Link to='/bookmarks'>Bookmarks</Link>
            </span>
        </div>
    )
}

export default CategoriesSideBar;