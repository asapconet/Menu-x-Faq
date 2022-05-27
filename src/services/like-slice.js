import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    isLiked: false,
    currentLikes: 0,
  },
  reducers: {
    liked(state) {
      if (!state.isLiked) {
        state.currentLikes++;
        state.isLiked = !state.isLiked;
      } else if (state.isLiked) {
        state.currentLikes--;
        state.isLiked = !state.isLiked;
      } else {
        return null;
      }
    },
  },
});

export const likeAction = likeSlice.actions;

export default likeSlice;
