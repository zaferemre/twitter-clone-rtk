import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  likedPostsIds: Record<number, boolean>;
}

const initialState: PostState = {
  likedPostsIds: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      if (state.likedPostsIds[postId]) {
        delete state.likedPostsIds[postId];
      } else {
        state.likedPostsIds[postId] = true;
      }
    },
  },
});

export const { toggleLike } = postSlice.actions;
export default postSlice.reducer;
