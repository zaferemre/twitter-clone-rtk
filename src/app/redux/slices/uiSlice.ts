import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  activeSidebarView: "feed" | "liked" | "followings";
}

const initialState: UIState = {
  activeSidebarView: "feed",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveSidebarView: (
      state,
      action: PayloadAction<UIState["activeSidebarView"]>
    ) => {
      state.activeSidebarView = action.payload;
    },
  },
});

export const { setActiveSidebarView } = uiSlice.actions;
export default uiSlice.reducer;
