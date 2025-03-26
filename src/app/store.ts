import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api.ts";
import authReducer from "../features/auth/authSlice.ts";
import postsReducer from "../features/posts/slices/postSlice.ts";
import uiReducer from "../features/ui/uiSlice.ts";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    posts: postsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
