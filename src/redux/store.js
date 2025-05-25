import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    cartUI: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
