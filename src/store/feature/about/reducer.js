import * as actionsType from "./constants";

const initialState = {
  banners: [],
  recommends: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionsType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
