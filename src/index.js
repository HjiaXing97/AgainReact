/*
 * @Author       : hovercao 17388766232@163.com
 * @Date         : 2022-10-10 10:20:38
 * @LastEditors  : hovercao 17388766232@163.com
 * @LastEditTime : 2022-10-10 14:19:13
 * @FilePath     : \AgainReact\src\index.js
 */
import "assets/css/index.less";
import "normalize.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "src/App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
