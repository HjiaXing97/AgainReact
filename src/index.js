import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

// import App from './01_数据不可变性/App';
// import App from "./02_获取DOM的ref/App";
// import App from "./03_高阶组件/App";
// import App from "./04_css_in_js/App";
import App from "./05_redux使用/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
