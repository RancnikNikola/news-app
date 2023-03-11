import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { setSearchField } from "../../store/search-field/search-field.action";
import { useDispatch } from "react-redux";

const Navigation = () => {

    const dispatch = useDispatch();

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="navigation-top">
                    <span>Make MyNews your homepage</span>
                    <span>Every day discover what's trending on the internet!</span>
                    <div className="navigation-buttons">
                        <Link>get</Link>
                        <Link>no, thanks</Link>
                    </div>
                </div>
                <div className="navigation-bottom">
                    <div className="navigation-logo">
                        <h1>MyNews</h1>
                        <span>O</span>
                        <input onChange={onSearchChange} type='search' placeholder='Search news' />
                        <button>search</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;