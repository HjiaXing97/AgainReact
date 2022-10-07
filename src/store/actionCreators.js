import * as actionsType from "./constants";

export const addNumActions = (num) => ({
  type: actionsType.ADD_NUMBER_ACTIONS,
  num,
});
export const subNumActions = (num) => ({
  type: actionsType.SUB_NUMBER_ACTIONS,
  num,
});

export const changeBannersActions = (banners) => ({
  type: actionsType.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsActions = (recommends) => ({
  type: actionsType.CHANGE_RECOMMENDS,
  recommends,
});
