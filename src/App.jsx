/*
 * @Author       : hovercao 17388766232@163.com
 * @Date         : 2022-10-10 10:20:38
 * @LastEditors  : hovercao 17388766232@163.com
 * @LastEditTime : 2022-10-10 15:19:49
 * @FilePath     : \AgainReact\src\App.jsx
 */
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
}

export default App;
