import CategoriesSideBar from "../../components/categories-side-bar/categories-side-bar.component";
import ArticlesPreview from "../../components/articles-preview/articles-preview.component";
import { selectHamburger } from "../../store/hamburger/hamburger.selector";
import { useSelector } from "react-redux";
import './home.styles.scss';

const Home = () => {

    const isHamburgerOpen = useSelector(selectHamburger);

    return (
        <>
        <p className="dwa">News</p>
        <div className="homepage">
            <CategoriesSideBar />
            <ArticlesPreview />
        </div>
        </>
    )
}

export default Home;