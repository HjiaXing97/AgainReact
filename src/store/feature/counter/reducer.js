import * as actionsType from "./constants";

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsType.ADD_NUMBER_ACTIONS:
      return { ...state, counter: state.counter + action.num };
    case actionsType.SUB_NUMBER_ACTIONS:
      return { ...state, counter: state.counter - action.num };

    default:
      return state;
  }
}
