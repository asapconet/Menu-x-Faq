import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import homeSlice from "./home-slice";
import likeSlice from "./like-slice";
import loveSlice from "./loveSlice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
    love: loveSlice.reducer,
  },
});

export default store;
