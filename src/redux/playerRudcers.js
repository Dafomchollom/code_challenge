import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerList: [],
  },
  reducers: {
    populatePlayerStore: (state, action) => {
      state.playerList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populatePlayerStore } = playerSlice.actions;

export default playerSlice.reducer;
