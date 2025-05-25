import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../redux/ui";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
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
