import { cartSliceActions } from "./cart";
import { uiSliceActions } from "./ui";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://test-http-741d8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");
            if(!response.ok){
                throw new Error('Data is unable to fetch! ⚠')
            }
            const data = response.json();
            return data;
        }

        try{
            const data = await fetchData();
            dispatch(cartSliceActions.replace(data));
        } catch(err){
            dispatch(
                uiSliceActions.showNotification({
                  status: "error",
                  title: "Item not added",
                  message: "Adding to cart is failed",
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
          "https://test-http-741d8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Add Cart Failed");
        }
      };
  
      try {
        await sendRequest();
      } catch (err) {
        dispatch(
          uiSliceActions.showNotification({
            status: "error",
            title: "Item not added",
            message: "Adding to cart is failed",
          })
        );
      }
  
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Item added",
          message: "Added to cart Successfully",
        })
      );
    };
  };