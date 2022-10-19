//判断一个对象是否为空对象

export default function (obj) {
  return !!Object.keys(obj).length;
}
