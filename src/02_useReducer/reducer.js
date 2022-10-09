/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-09 15:04:39
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-09 15:10:31
 * @FilePath: \AgainReact\src\02_useReducer\reducer.js
 */
export default function reducer(state, actions) {
  switch (actions.type) {
    case "add_number":
      return { ...state, counter: state.counter + actions.num };
    case "sub_number":
      return { ...state, counter: state.counter - actions.num };
    default:
      return state;
  }
}
