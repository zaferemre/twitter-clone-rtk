import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api.ts";
import authReducer from "./slices/authSlice.ts";
import postsReducer from "./slices/postSlice.ts";
import uiReducer from "./slices/uiSlice.ts";
import photosReducer from "./slices/photosSlice.ts";
import followReducer from "./slices/followSlice.ts";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    posts: postsReducer,
    ui: uiReducer,
    photos: photosReducer,
    follow: followReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
