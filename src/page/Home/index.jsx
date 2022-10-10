/*
 * @Author       : hovercao 17388766232@163.com
 * @Date         : 2022-10-10 14:09:05
 * @LastEditors  : hovercao 17388766232@163.com
 * @LastEditTime : 2022-10-10 14:51:27
 * @FilePath     : \AgainReact\src\page\Home\index.jsx
 */
import { memo, useEffect } from "react";
import request from "src/services";

const Home = memo(() => {
  useEffect(() => {
    request.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Home</div>;
});

export default Home;
