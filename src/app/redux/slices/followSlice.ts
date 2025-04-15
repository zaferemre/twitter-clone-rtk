import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FollowState {
  followedUserIds: number[];
  initialized: boolean;
}

const initialState: FollowState = {
  followedUserIds: [],
  initialized: false,
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    toggleFollowUser(state, action: PayloadAction<number>) {
      const userId = action.payload;
      if (state.followedUserIds.includes(userId)) {
        state.followedUserIds = state.followedUserIds.filter(
          (id) => id !== userId
        );
      } else {
        state.followedUserIds.push(userId);
      }
    },
    setAllFollows(state, action: PayloadAction<number[]>) {
      state.followedUserIds = action.payload;
      state.initialized = true;
    },
    clearFollows(state) {
      state.followedUserIds = [];
    },
  },
});

export const { toggleFollowUser, setAllFollows, clearFollows } =
  followSlice.actions;
export default followSlice.reducer;
