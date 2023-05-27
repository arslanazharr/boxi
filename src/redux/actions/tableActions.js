import { ActionTypes } from "../constants/actionTypes";

export const showTables = (tables) => {
  return {
    type: ActionTypes.SHOW_D,
    payload: tables,
  };
};
export const setLoading = (isLoading) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: isLoading,
  };
};
