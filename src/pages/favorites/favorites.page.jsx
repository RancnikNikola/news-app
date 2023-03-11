import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/favorites/favorite.selector";
import { Link } from "react-router-dom";

const Favorites = () => {

    const favorites = useSelector(selectFavorites);

    return (
        <div className="favorites">
            {
                favorites && favorites.map((favorite) => (
                    <div key={favorite.id}>
                        <span>
                            <Link to={`/${favorite.category}/${favorite.id}`}>
                                <h2>{favorite.name}</h2>
                            </Link>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Favorites;