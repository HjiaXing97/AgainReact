/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-26 08:05:27
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-08 17:33:25
 * @FilePath: \AgainReact\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
