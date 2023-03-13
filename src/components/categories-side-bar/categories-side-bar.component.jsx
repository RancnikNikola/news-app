import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import CategorySideBarItems from "../category-side-bar-items/category-side-bar-items.component";
import { Link } from "react-router-dom";
import { FiMonitor } from 'react-icons/fi';
import { BsBriefcase } from 'react-icons/bs';
import { GiHealthNormal, GiMaterialsScience } from 'react-icons/gi';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { RiFilePaper2Line } from 'react-icons/ri';
import './categories-side-bar.styles.scss';

const CategoriesSideBar = () => {

    const icons = [
        { id: 0, name: <FiMonitor/>},
        { id: 1, name: <BsBriefcase/>},
        { id: 2, name: <GiHealthNormal/> },
        { id: 3, name: <GiMaterialsScience />},
        { id: 4, name: <MdOutlineSportsSoccer/> },
        { id: 5, name: <RiFilePaper2Line/> },
        { id: 6, name: <RiFilePaper2Line />},
        { id: 7, name: <RiFilePaper2Line />},
      ];

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
                    <CategorySideBarItems key={id} category={category} icon={icons} id={id} />
                ))
            }
            <div className="favorite-bookmarks-container">
                <span>
                    <Link to='/favorites'>Favorites</Link>
                </span>
                <span>
                    <Link to='/bookmarks'>Bookmarks</Link>
                </span>
            </div>
           
        </div>
    )
}

export default CategoriesSideBar;