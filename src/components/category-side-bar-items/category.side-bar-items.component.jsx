import { Link } from "react-router-dom";

const CategorySideBarItems = ({ category }) => {
    return (
        <div className="category">
            <span>
                <Link to={`${category}`}>{category}</Link>
            </span>
        </div>
    )
}

export default CategorySideBarItems;