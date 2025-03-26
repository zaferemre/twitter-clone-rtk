import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types.ts";

interface AuthState {
  user: User | null;
  method: "firebase" | "jsonplaceholder";
}

const initialState: AuthState = {
  user: null,
  method: "firebase",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setAuthMethod(
      state,
      action: PayloadAction<"firebase" | "jsonplaceholder">
    ) {
      state.method = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, setAuthMethod, logout } = authSlice.actions;
export default authSlice.reducer;
