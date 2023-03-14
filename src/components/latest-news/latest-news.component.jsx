import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../store/articles/article.selector';
import { Link } from 'react-router-dom';
import './latest-news.styles.scss';

const LatestNews = () => {

    const [ limit, setLimit ] = useState(5);
    const articles = useSelector(selectArticles);
    const observer = useRef();

    const lastElementRef = useCallback(node => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLimit(prevLimit => prevLimit + 5)
            }
        })
        if (node) observer.current.observe(node);
    }, [])

    const limitedArticles = articles && articles.slice(0, limit).map((article) => {
        return article;
    })


    return (
        <>
        <div className='latest-news'>
            <h2><span className="dot"></span>Latest News</h2>
            {
                articles && articles.slice(0, limit).map((article, index) => {
                    if (limitedArticles.length === index + 1) {
                        return <Link to={`${article.category}/${article.id}`}><h4 ref={lastElementRef} key={article.id}>{article.name}</h4></Link>
                    } else {
                        return <Link to={`${article.category}/${article.id}`}><h4 key={article.id}>{article.name}</h4></Link>
                    }
                })
            }
        </div>
        </>
    )
}

export default LatestNews;