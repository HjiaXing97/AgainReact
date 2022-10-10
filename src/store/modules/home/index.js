import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPrice } from "src/services";

export const fetchGoodPriceData = createAsyncThunk(
  "fetch/home/goodPrice",
  async () => {
    return await getHomeGoodPrice();
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    goodPriceInfoActions(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchGoodPriceData.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});
export const { goodPriceInfoActions } = HomeSlice.actions;
export default HomeSlice.reducer;
