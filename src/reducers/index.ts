import { AnyAction, combineReducers } from "redux";
import activeRequest from "~/reducers/active-request";
import dataEntities from "~/reducers/data-entities";
import queryPaths from "~/reducers/query-paths";
import responses from "~/reducers/responses";
import schemaTypes from "~/reducers/schema-types";
import { CombineReducersResult } from "~/reducers/types";

export default combineReducers<CombineReducersResult, AnyAction>({
  activeRequest,
  dataEntities,
  queryPaths,
  responses,
  schemaTypes,
});
