import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./redux/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisble = useSelector((state) => state.cartUI.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cartUI.notification);
  

  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {cartVisble && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
