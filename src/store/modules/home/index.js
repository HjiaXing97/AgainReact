import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeDiscount,
  getHomeGoodPrice,
  getHomeHighScore,
  getHomeHotRecommendData,
  getHomeLongForData,
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

    getHomeHotRecommendData().then((res) => {
      dispatch(hotRecommendInfoActions(res));
    });

    getHomeLongForData().then((res) => {
      dispatch(longForInfoActions(res));
    });
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
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
    hotRecommendInfoActions(state, { payload }) {
      state.hotRecommendInfo = payload;
    },

    longForInfoActions(stata, { payload }) {
      stata.longForInfo = payload;
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
  hotRecommendInfoActions,
  longForInfoActions,
} = HomeSlice.actions;

export default HomeSlice.reducer;
