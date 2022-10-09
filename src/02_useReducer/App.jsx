import React, { useReducer } from "react";
import reducer from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const addNumber = (num) => {
    dispatch({ type: "add_number", num });
  };

  return (
    <div>
      <p>App page {state.counter}</p>
      <div>
        <button onClick={() => addNumber(1)}>+1</button>
        <button onClick={() => addNumber(5)}>+5</button>
        <button onClick={() => addNumber(10)}>+10</button>
      </div>
    </div>
  );
};

export default App;
