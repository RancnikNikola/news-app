import CategoriesSideBar from "../../components/categories-side-bar/categories-side-bar.component";
import ArticlesPreview from "../../components/articles-preview/articles-preview.component";
import './home.styles.scss';

const Home = () => {


    return (
        <div className="homepage">
            <CategoriesSideBar />
            <ArticlesPreview />
        </div>
    )
}

export default Home;