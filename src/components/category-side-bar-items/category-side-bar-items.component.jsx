import { Link } from "react-router-dom";
import './category-side-bar-items.styles.scss';

const CategorySideBarItems = ({ category, icon, id }) => {

    return (
        <div className="category">
            <span>
                <Link to={`${category}`}>
                    {icon[id].name}
                    {category}
                </Link>
            </span>
        </div>
    )
}

export default CategorySideBarItems;