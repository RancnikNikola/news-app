import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { setSearchField } from "../../store/search-field/search-field.action";
import { useDispatch, useSelector } from "react-redux";
import { selectHamburger } from '../../store/hamburger/hamburger.selector';
import { setIsHamburgerOpen } from '../../store/hamburger/hamburger.action';
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';
import './navigation.styles.scss';

const Navigation = () => {

    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(selectHamburger);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

    const onClickOpenHamburger = () => dispatch(setIsHamburgerOpen(false));

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
                        <span className="my">My<span>News</span></span>
                    </div>
                    <div className="search">
                        <span><AiOutlineSearch /></span>
                        <input className="search-bar" onChange={onSearchChange} type='search' placeholder='Search news' />
                        <button>search</button>
                    </div>
                    <GiHamburgerMenu className="hamburger-menu" onClick={onClickOpenHamburger}/>
                </div>
                <div className="navigation-links">
                    <Link to='/' className="link-featured">Featured</Link>
                    <Link to='/latest' className="link-latest">Latest</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;