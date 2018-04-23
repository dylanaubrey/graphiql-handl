import { AnyAction, combineReducers } from "redux";
import activeRequest from "./active-request";
import dataEntities from "./data-entities";
import queryPaths from "./query-paths";
import responses from "./responses";
import { CombineReducersResult } from "./types";

export default combineReducers<CombineReducersResult, AnyAction>({
  activeRequest,
  dataEntities,
  queryPaths,
  responses,
});
