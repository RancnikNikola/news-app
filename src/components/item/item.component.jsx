
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "../../store/articles/article.selector";

const Item = () => {

    const { category, itemId } = useParams();
    const articles = useSelector(selectArticles);

    const currentItem = articles.find(items => {
        return items.id === parseInt(itemId) && items.category === category
    })
    console.log(currentItem);


    return (
        <div className="item">
            <h2>{currentItem.title}</h2>
        </div>
    )
}

export default Item;