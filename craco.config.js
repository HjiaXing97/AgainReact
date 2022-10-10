/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-10-10 11:10:13
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-10-10 11:25:26
 * @FilePath: \AgainReact\craco.config.js
 */
const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  webpack: {
    alias: {
      src: resolve("src"),
      assets: resolve("src/assets"),
      components: resolve("src/components"),
      hooks: resolve("src/hooks"),
      page: resolve("src/page"),
      router: resolve("src/router"),
      utils: resolve("src/utils"),
      store: resolve("src/store"),
      services: resolve("src/services"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
