/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-09 18:37:19
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 18:51:53
 * @FilePath: \AgainReact\src\04_useMemo\App.jsx
 */
import React, { useMemo, useState } from "react";

function addNumTotal() {
  console.log("addNumTotal被执行");
  let num = 0;
  for (let i = 0; i <= 50; i++) {
    num += i;
  }
  return num;
}

function App() {
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    return addNumTotal();
  }, []);
  return (
    <div>
      <p>App page:{count}</p>
      <p>{total}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
