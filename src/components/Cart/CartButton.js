import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../redux/ui";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.totalQuantity);

  console.log(cartItems);
  

  function toggleCart() {
    dispatch(uiSliceActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
