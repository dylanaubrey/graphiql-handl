import { ClientHandl } from "handl";
import { Dispatch } from "react-redux";

import {
  cacheEntryAdded,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  subscriptionExecuted,
} from "../actions/handl";

export default function handlEventListeners(handl: ClientHandl, dispatch: Dispatch<{}>): void {
  handl
    .on("cache_entry_added", (data) => {
      dispatch(cacheEntryAdded(data));
    })
    .on("fetch_executed", (data) => {
      dispatch(fetchExecuted(data));
    })
    .on("partial_compiled", (data) => {
      dispatch(partialCompiled(data));
    })
    .on("request_executed", (data) => {
      dispatch(requestExecuted(data));
    })
    .on("request_timed", (data) => {
      dispatch(requestTimed(data));
    })
    .on("subscription_executed", (data) => {
      dispatch(subscriptionExecuted(data));
    });
}
