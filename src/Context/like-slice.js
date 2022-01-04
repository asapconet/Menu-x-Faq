import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: { isLiked: false },
  currentLikes: 0,
  reducers: {
    liked(state) {
        if (!state.isLiked) {
            state.currentLikes++
        } else {
            state.currentLikes--
        }
    },
  },
});

export const likeAction = likeSlice.actions;

export default likeSlice;
