/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-10 08:50:44
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-10 09:39:08
 * @FilePath: \AgainReact\src\06_redux-hooks\store\modules\counter.js
 */
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 9,
    message: "hello world",
  },
  reducers: {
    addNumber(state, actions) {
      state.count = state.count + actions.payload;
    },
    subNumber(state, actions) {
      state.count = state.count - actions.payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});
export const { addNumber, subNumber, changeMessageAction } =
  counterSlice.actions;
export default counterSlice.reducer;
