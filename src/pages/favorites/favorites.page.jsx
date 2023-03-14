import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/favorites/favorite.selector";
import { Link } from "react-router-dom";

const Favorites = () => {

    const favorites = useSelector(selectFavorites);

    return (
        <div className="favorites">
            {
                favorites && favorites.map((favorite) => (
                    <div key={favorite.id} className="item">
                        <span>
                            <Link to={`/${favorite.category}/${favorite.id}`}>
                                <h2>{favorite.name}</h2>
                            </Link>
                        </span>
                            <img src={`https://source.unsplash.com/random/400x200/?img=${favorite.id}`} alt="image" />
                            <span>{favorite.id}</span>
                            <h4>{favorite.category}</h4>
                            <p>{favorite.description}</p>
                        </div>
                ))
            }
        </div>
    )
}

export default Favorites;