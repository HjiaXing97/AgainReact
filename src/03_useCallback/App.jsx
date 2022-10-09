/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-09 16:16:17
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 18:32:15
 * @FilePath: \AgainReact\src\03_useCallback\App.jsx
 */
import React, { useCallback, useRef, useState } from "react";

function JxAddNumber(props) {
  const { addNumber } = props;
  console.log("JxAddNumber 被渲染");
  return (
    <>
      <button onClick={addNumber}>+ 1 JxAddNumber</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [randomNum, setRandom] = useState(0);

  const countRef = useRef();
  countRef.current = count;
  // const addNumber = useCallback(
  //   function () {
  //     setCount(count + 1);
  //   },
  //   [count] //如果不加count依赖,则会存在闭包陷阱，
  // );

  //优化
  const addNumber = useCallback(function () {
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <p>App page {count}</p>
      <div>
        <button onClick={addNumber}>+1</button>
        <JxAddNumber addNumber={addNumber} />
        <p>randomNum:{randomNum}</p>
        <button onClick={() => setRandom(Math.random())}>
          change randomNum
        </button>
      </div>
    </div>
  );
}

export default App;
