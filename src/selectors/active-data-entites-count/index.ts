import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, ReduxState } from "../../types";

export const getActiveDataEntitiesCount: (state: ReduxState) => number = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.dataEntities.length,
);
