import * as actionsType from "./constants";

export const addNumActions = (num) => ({
  type: actionsType.ADD_NUMBER_ACTIONS,
  num,
});
export const subNumActions = (num) => ({
  type: actionsType.SUB_NUMBER_ACTIONS,
  num,
});
