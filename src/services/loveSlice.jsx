import { createSlice } from "@reduxjs/toolkit";

const loveSlice = createSlice({
  name: "love",
  initialState: {
    isLiked: false,
    currentLove: 0,
  },
  reducers: {
    loved(state) {
      if (!state.isLoved) {
        state.currentLove++;
        state.isLoved = !state.isLoved;
      } else if (state.isLoved) {
        state.currentLove--;
        state.isLoved = !state.isLoved;
      } else {
        return null;
      }
    },
  },
});

export const loveAction = loveSlice.actions;

export default loveSlice;
