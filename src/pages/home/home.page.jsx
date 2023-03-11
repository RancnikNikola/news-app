import CategoriesSideBar from "../../components/categories-side-bar/categories-side-bar.component";
import ArticlesPreview from "../../components/articles-preview/articles-preview.component";

const Home = () => {


    return (
        <div className="homepage">
            <CategoriesSideBar />
            <ArticlesPreview />
        </div>
    )
}

export default Home;