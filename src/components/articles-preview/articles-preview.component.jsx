
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import { selectHamburger } from "../../store/hamburger/hamburger.selector";
import { selectSearchArticles } from '../../store/search-articles/search-articles.selector';
import Article from "../article/article.component";
import LatestNews from "../latest-news/latest-news.component";
import CategoriesSideBar from "../categories-side-bar/categories-side-bar.component";
import CategoryMenu from '../category-menu/category-menu.component';
import { useParams } from "react-router-dom";
import './articles-preview.styles.scss';
import { useEffect, useState } from "react";

const ArticlesPreview = () => {

    const articles = useSelector(selectArticles);
    const searchArticles = useSelector(selectSearchArticles);
    const sc = window.innerHeight;
    const { category } = useParams()
    const [ screenSize, setScreenSize ] = useState(window.innerWidth)

    const filteredArticles = articles.filter(article => {
        return article.name.toLowerCase().includes(searchArticles.toLowerCase())
    })
    const categoryItems = articles.filter(item => item.category === category);
    const isHamburgerOpen = useSelector(selectHamburger);

    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = window.innerWidth;
          setScreenSize(newHeight);
          console.log(newHeight)
        };
    
        window.addEventListener("resize", updateWindowDimensions);
    
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    
      }, [screenSize]);

      console.log(screenSize);



    return (
        <div className="nesto">
        <CategoryMenu />
        {isHamburgerOpen && <CategoriesSideBar />}
        <div className="articles-preview">
            {
                screenSize < 900 ? (
                    <></>
                ) : (
                    <LatestNews className="articles-latest" />
                )
            }
           
            {
                category ?
                (categoryItems.map((article, idx) => (
                    <Article key={article.id} article={article} idx={idx} />
                ))) : (
                    filteredArticles.map((article, idx) => (
                        <Article key={article.id} article={article} idx={idx} />
                )))
            }
        </div>
        </div>
    )
}

export default ArticlesPreview;