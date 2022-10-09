import React, { useCallback, useState } from "react";

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

  const addNumber = useCallback(
    function () {
      setCount(count + 1);
    },
    [count] //如果不加count依赖,则会存在闭包陷阱，
  );
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
