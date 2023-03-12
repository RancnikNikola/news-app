import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { setSearchField } from "../../store/search-field/search-field.action";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import './navigation.styles.scss';

const Navigation = () => {

    const dispatch = useDispatch();

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

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
                        <span className="my">My</span>
                        <span>News</span>
                    </div>
                    <div className="search">
                        <span><AiOutlineSearch /></span>
                        <input className="search-bar" onChange={onSearchChange} type='search' placeholder='Search news' />
                        <button>search</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;