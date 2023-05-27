import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const reducers = combineReducers({
  allData: dataReducer,
});

export default reducers;
