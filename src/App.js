import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setArticles } from './store/articles/article.actions';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './pages/home/home.page';
import CategoriesPreview from './components/categories-preview/categories-preview.component';
import Item from './components/item/item.component';
import Favorites from './pages/favorites/favorites.page';
import Bookmarks from './pages/bookmarks/bookmarks.component';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getArticles = async () => {
      fetch("https://dummyjson.com/products?limit=50")
      .then(res => {
        return res.json();
      })
      .then(data => {
       dispatch(setArticles(data['products']))
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
