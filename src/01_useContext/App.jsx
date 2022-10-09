/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-09 08:30:39
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 08:40:15
 * @FilePath: \AgainReact\src\01_useContext\App.jsx
 */
import React, { useContext } from "react";

import { UserContext, ThemeContext } from "./context";
const App = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user);
  console.log(theme);
  return <div>App</div>;
};

export default App;
