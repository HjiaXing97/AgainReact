/*
 * @Author       : hovercao 17388766232@163.com
 * @Date         : 2022-10-10 14:17:56
 * @LastEditors  : hovercao 17388766232@163.com
 * @LastEditTime : 2022-10-10 14:36:31
 * @FilePath     : \AgainReact\src\store\index.js
 */
import { configureStore } from "@reduxjs/toolkit";
import DetailSlice from "./modules/detail";
import EntireReducer from "./modules/entire";
import HomeReducer from "./modules/home";

const store = configureStore({
  reducer: {
    home: HomeReducer,
    entire: EntireReducer,
    detail: DetailSlice,
  },
});

export default store;
