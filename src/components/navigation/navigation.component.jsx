import { Fragment } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { setSearchField } from "../../store/search-field/search-field.action";
import { selectSearchField } from '../../store/search-field/search-field.selector';
import { setSearchArticles } from '../../store/search-articles/search-articles.action';
import { useDispatch, useSelector } from "react-redux";
import { selectHamburger } from '../../store/hamburger/hamburger.selector';
import { setIsHamburgerOpen } from '../../store/hamburger/hamburger.action';
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im'
import './navigation.styles.scss';

const Navigation = () => {

    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(selectHamburger);

    const onSearchChange = () => {
        dispatch(setSearchArticles(searchField))
    }    

    const onSearchKeyPress = (e) => {
        if(e.key === 'Enter'){
            dispatch(setSearchArticles(searchField))
        }
      
    }    
    
    const searchField = useSelector(selectSearchField)

    const handleChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const onClickOpenHamburger = () => dispatch(setIsHamburgerOpen(!isHamburgerOpen));

    return (
        <Fragment>
            <div className="navigation">
                <div className="navigation-top">
                    <span className="navigation-first-text">Make MyNews your homepage</span>
                    <span className="navigation-second-text">Every day discover what's trending on the internet!</span>
                    <div className="navigation-buttons">
                        <Link className="button-get">get</Link>
                        <Link className="button-no-thanks">No, thanks</Link>
                    </div>
                </div>
                <div className="navigation-bottom">
                    <div className="logo">
                        <h1 className="my">
                            <Link to='/'>My<span>News</span></Link>
                        </h1>
                        <button onClick={onClickOpenHamburger} className="dropdown-button">
                            {isHamburgerOpen ? (
                                <ImCross className="hamburger-icon" />
                                ) : (
                                <GiHamburgerMenu className="hamburger-icon"/>
                            )}
                        </button>
                    </div>
                    <div className="search">
                        <span><AiOutlineSearch /></span>
                        <input className="search-bar" type='search' placeholder='Search news' onChange={handleChange} onKeyDown={onSearchKeyPress}/>
                        <button onClick={onSearchChange} value={searchField}>search</button>
                    </div>
                    
                </div>
                <div className="navigation-links">
                    <NavLink to="/" className="links">Featured</NavLink>
                    <NavLink to='/latest' className="links"><span>Latest</span></NavLink>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;