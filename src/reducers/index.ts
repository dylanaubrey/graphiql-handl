import { AnyAction, combineReducers } from "redux";
import activeRequest from "./active-request";
import { CombineReducersResult } from "./types";

export default combineReducers<CombineReducersResult, AnyAction>({
  activeRequest,
});
