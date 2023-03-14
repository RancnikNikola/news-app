import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { Link } from "react-router-dom";
import CategoryItem from "../category-item/category-item.component";
// import './categories-preview.styles.scss';

const CategoriesPreview = () => {

    const { category } = useParams();
    const articles = useSelector(selectArticles);

    const categoryItems = articles.filter(item => item.category === category);

    return (
        <div className="categories-preview">
            {
                    categoryItems.map((categoryItem) => (
                        <span key={categoryItem.id}>
                            <Link to={`${categoryItem.id}`}>
                                <CategoryItem item={categoryItem} />
                            </Link>
                        </span>
                        
                    ))               
            }
        </div>
    )
}

export default CategoriesPreview;