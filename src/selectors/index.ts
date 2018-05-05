import { ActiveRequestState, ReduxState } from "~/types";

export const getActiveRequest = (state: ReduxState): ActiveRequestState => state.activeRequest;
