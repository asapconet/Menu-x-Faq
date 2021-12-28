import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import homeSlice from "./home-slice";

const store = configureStore({
  reducer: { home: homeSlice.reducer, cart: cartSlice.reducer },
});

export default store;
