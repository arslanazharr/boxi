import { ActionTypes } from "../constants/actionTypes";

export const showTables = (tables) => {
  return {
    type: ActionTypes.SHOW_TABLES,
    payload: tables,
  };
};
export const setLoading = (isLoading) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: isLoading,
  };
};
export const showDriveCards = (driveCards) => {
  return {
    type: ActionTypes.SHOW_DRIVE_CARDS,
    payload: driveCards,
  };
};
