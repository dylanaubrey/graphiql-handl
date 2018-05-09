import {
  CACHE_ENTRY_ADDED,
  ClientHandl,
  FETCH_EXECUTED,
  PARTIAL_COMPILED,
  REQUEST_EXECUTED,
  REQUEST_TIMED,
  SUBSCRIPTION_EXECUTED,
} from "handl";

import { Dispatch } from "react-redux";

import {
  cacheEntryAdded,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  subscriptionExecuted,
} from "~/actions";

export default function handlEventListeners(handl: ClientHandl, dispatch: Dispatch<{}>): void {
  handl
    .on(CACHE_ENTRY_ADDED, (data) => {
      dispatch(cacheEntryAdded(data));
    })
    .on(FETCH_EXECUTED, (data) => {
      dispatch(fetchExecuted(data));
    })
    .on(PARTIAL_COMPILED, (data) => {
      dispatch(partialCompiled(data));
    })
    .on(REQUEST_EXECUTED, (data) => {
      dispatch(requestExecuted(data));
    })
    .on(REQUEST_TIMED, (data) => {
      dispatch(requestTimed(data));
    })
    .on(SUBSCRIPTION_EXECUTED, (data) => {
      dispatch(subscriptionExecuted(data));
    });
}
