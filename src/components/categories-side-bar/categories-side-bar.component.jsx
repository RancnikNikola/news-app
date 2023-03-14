import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import CategorySideBarItems from "../category-side-bar-items/category-side-bar-items.component";
import { Link } from "react-router-dom";
import { FiMonitor } from 'react-icons/fi';
import { BsBriefcase, BsMusicNoteBeamed } from 'react-icons/bs';
import { GiHealthNormal, GiPotionBall } from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi';
import { RiNewspaperLine } from 'react-icons/ri';
import './categories-side-bar.styles.scss';

const CategoriesSideBar = () => {

    const icons = [
        { id: 0, name: <RiNewspaperLine/>},
        { id: 1, name: <FiMonitor/>},
        { id: 2, name: <BsBriefcase/> },
        { id: 3, name: <BiFootball />},
        { id: 4, name: <BsMusicNoteBeamed/> },
        { id: 5, name: <GiHealthNormal/> },
        { id: 6, name: <GiPotionBall />},
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