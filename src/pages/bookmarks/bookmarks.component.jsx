
import { useSelector } from "react-redux";
import { selectBookmarks } from "../../store/bookmark/bookmark.selector";
import { Link } from "react-router-dom";

const Bookmarks = () => {

    const bookmarks = useSelector(selectBookmarks);
    console.log(bookmarks)

    return (
        <div className="bookmarks">
            {
                bookmarks && bookmarks.map((bookmark) => (
                    <Link key={bookmark.id} to={bookmark}>{bookmark}</Link>
                ))
            }
        </div>
    )
}

export default Bookmarks;