import request from "../request";

export function getHomeGoodPrice() {
  return request.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScore() {
  return request.get({
    url: "/home/highscore",
  });
}
