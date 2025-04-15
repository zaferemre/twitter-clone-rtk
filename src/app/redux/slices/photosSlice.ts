import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhotoState {
  likedPhotosIds: Record<number, boolean>;
}
const initialState: PhotoState = {
  likedPhotosIds: {},
};
const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const photoId = action.payload;
      if (state.likedPhotosIds[photoId]) {
        delete state.likedPhotosIds[photoId];
      } else {
        state.likedPhotosIds[photoId] = true;
      }
    },
  },
});
export const { toggleLike } = photosSlice.actions;
export default photosSlice.reducer;
