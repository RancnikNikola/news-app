
import { useSelector } from "react-redux";
import { selectBookmarks } from "../../store/bookmark/bookmark.selector";
import { Link } from "react-router-dom";
import './bookmarks.styles.scss';

const Bookmarks = () => {

    const bookmarks = useSelector(selectBookmarks);

    return (
        <>
        <h1>Bookmarks</h1>
        <div className="bookmarks">
           
        {
            bookmarks && bookmarks.map((bookmark, id) => (
                <div key={bookmark.id} className="item">
                        <img src={`https://source.unsplash.com/random/400x200/?img=${bookmark.id}`} alt="image" />
                        <Link key={id} to={bookmark}>{bookmark}
                            <h2>{bookmark.name}</h2>
                        </Link>
                </div>
            ))
            }
        </div>
        </>
    )
}

export default Bookmarks;