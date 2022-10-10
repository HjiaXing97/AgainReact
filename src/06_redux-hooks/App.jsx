/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-10 08:47:36
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-10 09:47:11
 * @FilePath: \AgainReact\src\06_redux-hooks\App.jsx
 */
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter";

//useSelector第一个参数是映射store的值，第二个是判断是否重新渲染
//shallowEqual 会做一个浅层比较
const Home = memo(function (props) {
  console.log("Home render");
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );
  return (
    <>
      <p>Home</p>
      <p>{message}</p>
    </>
  );
});

function App() {
  console.log("App render");

  const { count } = useSelector((state) => ({ count: state.counter.count }));
  const dispatch = useDispatch();
  function numberChange(num, type = true) {
    if (type) {
      dispatch(addNumber(num));
    } else {
      dispatch(subNumber(num));
    }
  }
  return (
    <div>
      <p>ASpp</p>
      <div>{count}</div>
      <button onClick={() => numberChange(1)}>+1</button>
      <button onClick={() => numberChange(1, false)}>+1</button>
      <Home />
    </div>
  );
}

export default memo(App);
