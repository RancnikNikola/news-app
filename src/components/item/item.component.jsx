
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";

const Item = () => {

    const { category, itemId } = useParams();
    const articles = useSelector(selectArticles);

    const currentItem = articles.find(items => {
        return items.id === itemId && items.category === category
    })

    return (
        <div className="item">
            <h2>{currentItem.name}</h2>
        </div>
    )
}

export default Item;