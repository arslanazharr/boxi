import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const fetchDriveCard = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://6471f1e36a9370d5a41adaa8.mockapi.io/drivecard"
      );

      dispatch(showDriveCards(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDriveTable = (page, limit, sortBy, sortOrder) => {
  return async (dispatch) => {
    try {
      const params = {
        page,
        limit,
        sortBy,
        order: sortOrder,
      };
      const response = await axios.get(
        "https://6471f1e36a9370d5a41adaa8.mockapi.io/drivetable",
        // `https://6471f1e36a9370d5a41adaa8.mockapi.io/drivetable?page=${page}&limit=${limit}`,
        { params }
      );

      console.log(response.data);
      dispatch(showTables(response.data));
    } catch (error) {
      console.log(error);
    }
    console.log("PageNumber: ", page);
  };
};

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
