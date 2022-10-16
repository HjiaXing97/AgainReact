import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeDiscount,
  getHomeGoodPrice,
  getHomeHighScore,
} from "src/services";

export const fetchGoodPriceData = createAsyncThunk(
  "fetch/home/goodPrice",
  (payload, { dispatch }) => {
    getHomeGoodPrice().then((res) => {
      dispatch(goodPriceInfoActions(res));
    });

    getHomeHighScore().then((res) => {
      dispatch(highScoreInfoActions(res));
    });

    getHomeDiscount().then((res) => {
      dispatch(discountInfoActions(res));
    });
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },

  reducers: {
    goodPriceInfoActions(state, { payload }) {
      state.goodPriceInfo = payload;
    },

    highScoreInfoActions(state, { payload }) {
      state.highScoreInfo = payload;
    },

    discountInfoActions(state, { payload }) {
      state.discountInfo = payload;
    },
  },

  extraReducers: {
    [fetchGoodPriceData.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const {
  goodPriceInfoActions,
  highScoreInfoActions,
  discountInfoActions,
} = HomeSlice.actions;

export default HomeSlice.reducer;
