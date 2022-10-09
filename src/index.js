/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-26 08:05:27
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 18:37:41
 * @FilePath: \AgainReact\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./01_useContext/App";
// import App from "./02_useReducer/App";
// import App from "./03_useCallback/App";
import App from "./04_useMemo/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <UserContext.Provider value={{ name: "hjx", level: 99 }}>
  //   <ThemeContext.Provider value={{ color: "red" }}>
  //     <App />
  //   </ThemeContext.Provider>
  // </UserContext.Provider>
  <App />
);
