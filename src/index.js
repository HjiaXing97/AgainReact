import React from "react";
import ReactDOM from "react-dom/client";
// import App from './01_数据不可变性/App';
import App from "./02_获取DOM的ref/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
