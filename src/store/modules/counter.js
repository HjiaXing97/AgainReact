import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 888,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.count = payload + state.count;
    },
    subNumber(state, { payload }) {
      state.count = state.count - payload;
    },
  },
});

export const { addNumber, subNumber } = counterSlice.actions;
export default counterSlice.reducer;
