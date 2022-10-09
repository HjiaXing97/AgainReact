/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-26 08:05:27
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 08:38:15
 * @FilePath: \AgainReact\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext, UserContext } from "./01_useContext/context";

import App from "./01_useContext/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={{ name: "hjx", level: 99 }}>
    <ThemeContext.Provider value={{ color: "red" }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
);
