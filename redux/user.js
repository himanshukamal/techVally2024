// yourReducer.js
import { createSlice } from "@reduxjs/toolkit";

const yourSlice = createSlice({
  name: "your",
  initialState: {
    // Your initial state goes here
  },
  reducers: {
    // Your reducer functions go here
  },
});

export const { yourReducerAction } = yourSlice.actions;
export default yourSlice.reducer;
