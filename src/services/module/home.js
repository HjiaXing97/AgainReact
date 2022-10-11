import request from "../request";

export function getHomeGoodPrice() {
  return request.get({
    url: "/home/goodprice",
  });
}
