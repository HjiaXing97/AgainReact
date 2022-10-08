import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultiDataAction = createAsyncThunk(
  "fetch/homeMultiData",
  async () => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    return res.data.data;
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },
  extraReducers: {
    [fetchHomeMultiDataAction.pending]() {
      console.log("fetchHomeMultiDataAction   pending");
    },
    [fetchHomeMultiDataAction.fulfilled](state, { payload }) {
      state.banners = payload.banner.list;
      state.recommends = payload["recommend"].list;
    },
  },
});

export const { changeBanners, changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;
