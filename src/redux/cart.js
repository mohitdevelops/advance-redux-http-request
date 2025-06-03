import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cartitem",
  initialState: initialCartState,
  reducers: {
    replace(state, action){
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items
    },
    addCart(state, action) {
      const clickedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === clickedItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: clickedItem.id,
          price: clickedItem.price,
          quantity: 1,
          totalPrice: clickedItem.price,
          name: clickedItem.title,
        });
      } else {
        existingItem.quantity++,
          (existingItem.totalPrice =
            existingItem.totalPrice + clickedItem.price);
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});



export const cartSliceActions = cartSlice.actions;

export default cartSlice;
