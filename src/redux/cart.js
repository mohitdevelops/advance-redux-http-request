import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  quantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartitem",
  initialState: initialCartState,
  reducers: {
    replace(state, action){
      state.quantity = action.payload.quantity;
      state.items = action.payload.items
    },
    addCart(state, action) {
      const clickedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === clickedItem.id
      );
      state.totalAmount++;
      if (!existingItem) {
        state.items.push({
          id: clickedItem.id,
          price: clickedItem.price,
          quantity: 1,
          totalPrice: clickedItem.price,
          name: clickedItem.title,
        });
      } else {
        state.totalAmount--;
        existingItem.quantity++,
          (existingItem.totalPrice =
            existingItem.totalPrice + clickedItem.price);
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem === 1) {
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
