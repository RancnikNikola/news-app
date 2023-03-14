
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";
import './item.styles.scss';

const Item = () => {

    const { category, itemId } = useParams();
    const articles = useSelector(selectArticles);

    const currentItem = articles.find(items => {
        return items.id === itemId && items.category === category
    })

    console.log(currentItem);

    return (
        <div className="item">
            <img src={`https://source.unsplash.com/random/400x200/?img=${currentItem.id}`} alt="image" />
             <h2>{currentItem.name}</h2>
            <span>{currentItem.id}</span>
            <h4>{currentItem.category}</h4>
            <p>{currentItem.description}</p>
        </div>
    )
}

export default Item;