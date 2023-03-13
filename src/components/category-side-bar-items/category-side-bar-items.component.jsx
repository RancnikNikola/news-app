import { Link } from "react-router-dom";
import './category-side-bar-items.styles.scss';

const CategorySideBarItems = ({ category, icon, id }) => {

    return (
        <div className="category">
            <span>
                <Link to={`${category}`}>
                    <h3 className="category-icon">{icon[id].name}</h3>
                    <p>{category}</p>
                </Link>
            </span>
        </div>
    )
}

export default CategorySideBarItems;