import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPrice, getHomeHighScore } from "src/services";

export const fetchGoodPriceData = createAsyncThunk(
  "fetch/home/goodPrice",
  (payload, { dispatch }) => {
    getHomeGoodPrice().then((res) => {
      dispatch(goodPriceInfoActions(res));
    });

    getHomeHighScore().then((res) => {
      dispatch(highScoreInfoActions(res));
    });
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    goodPriceInfoActions(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    highScoreInfoActions(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    [fetchGoodPriceData.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});
export const { goodPriceInfoActions, highScoreInfoActions } = HomeSlice.actions;
export default HomeSlice.reducer;
