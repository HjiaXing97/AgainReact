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

export function getHomeDiscount() {
  return request.get({
    url: "/home/discount",
  });
}

//热门目的地
export function getHomeHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongForData() {
  return request.get({
    url: "/home/longfor",
  });
}
