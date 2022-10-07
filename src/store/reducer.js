import * as actionsType from "./constants";

const initialState = {
  counter: 0,
  banners: [],
  recommends: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsType.ADD_NUMBER_ACTIONS:
      return { ...state, counter: state.counter + action.num };
    case actionsType.SUB_NUMBER_ACTIONS:
      return { ...state, counter: state.counter - action.num };
    case actionsType.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionsType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
