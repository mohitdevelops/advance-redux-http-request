import { cartSliceActions } from "./cart";
import { uiSliceActions } from "./ui";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://redux-http-thunk-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",{method:'GET'});
            if(!response.ok){
                throw new Error('Data is unable to fetch! ⚠')
            }
            const data = response.json();
            return data;
        }

        try{
            const data = await fetchData();
            dispatch(cartSliceActions.replace({
              items: data.items || [],
              totalQuantity: data.totalQuantity,
            }));
        } catch(err){
            dispatch(
                uiSliceActions.showNotification({
                  status: "error",
                  title: "Item not added",
                  message: "Adding to cart is failed lol",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending...",
        title: "Sending Items",
        message: "Item adding to cart",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-http-thunk-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("Add Cart Failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Item added",
          message: "Added to cart Successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Item not added",
          message: "Adding to cart is failed",
        })
      );
    }

    
  };
};