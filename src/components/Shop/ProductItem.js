import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../redux/cart";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  function handleAddItem() {
    dispatch(
      cartSliceActions.addCart({
        id,
        title,
        price,
        description,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
