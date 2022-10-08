import * as actionsType from "./constants";
import axios from "axios";

export const changeBannersActions = (banners) => ({
  type: actionsType.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsActions = (recommends) => ({
  type: actionsType.CHANGE_RECOMMENDS,
  recommends,
});

export const fetchBannersActions = () => {
  return function (dispatch) {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const data = res.data.data;

      dispatch(changeBannersActions(data.banner.list));
      dispatch(changeRecommendsActions(data.recommend.list));
      console.log(data);
    });
  };
};
