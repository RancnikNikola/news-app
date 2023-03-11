import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../store/articles/article.selector';

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
            {
                articles && articles.slice(0, limit).map((article, index) => {
                    console.log('LIMITED ARTICLES LENGTH', limitedArticles.length);
                    console.log('INDEX OF ARTICLES', index + 1);
                    if (limitedArticles.length === index + 1) {
                        return <h3 ref={lastElementRef} key={article.id}>{article.title}</h3>
                    } else {
                        return <h3 key={article.id}>{article.title} title</h3>
                    }
                })
            }
        </div>
        </>
    )
}

export default LatestNews;