import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from './store/articles/article.actions';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './pages/home/home.page';
import CategoriesPreview from './components/categories-preview/categories-preview.component';
import Item from './components/item/item.component';
import Favorites from './pages/favorites/favorites.page';
import Bookmarks from './pages/bookmarks/bookmarks.page';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getArticles = async () => {
      fetch('https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=37043181d485475aa319b3c0af1b5e5d')
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch(setArticles(data['sources']))
      })
    }
    getArticles();
  }, []);


  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='/favorites' element={ <Favorites /> } />
        <Route path=':category' element={ <CategoriesPreview /> } />
        <Route path='/:category/:itemId' element={ <Item /> } />
        <Route path='/bookmarks' element={ <Bookmarks />} />
      </Route>
    </Routes>
  );
}

export default App;
