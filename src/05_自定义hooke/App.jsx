/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-10 08:26:27
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-10 08:30:40
 * @FilePath: \AgainReact\src\05_自定义hooke\App.jsx
 */
import React, { useEffect, useState } from "react";

function About() {
  useEffect(() => {
    console.log("About组件被创建");
    return () => {
      console.log("About组件被销毁");
    };
  }, []);
  return <div>About</div>;
}

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log("App组件被创建");
    return () => {
      console.log("App组件被销毁");
    };
  }, []);

  function changeAbout() {
    console.log(111);
    setShow(!show);
  }
  return (
    <div>
      <p>App</p>
      {show ? <About /> : null}
      <button onClick={(e) => changeAbout()}>show</button>
    </div>
  );
}

export default App;
