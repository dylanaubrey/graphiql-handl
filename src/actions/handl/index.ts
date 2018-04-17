import { createActions } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
  FETCH_EXECUTED,
  PARTIAL_COMPILED,
  REQUEST_EXECUTED,
  REQUEST_TIMED,
  SUBSCRIPTION_EXECUTED,
} from "../../constants/actions";

export const {
  cacheEntryAdded,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  subscriptionExecuted,
} = createActions({
  [CACHE_ENTRY_ADDED]: (data) => ({ data }),
  [FETCH_EXECUTED]: (data) => ({ data }),
  [PARTIAL_COMPILED]: (data) => ({ data }),
  [REQUEST_EXECUTED]: (data) => ({ data }),
  [REQUEST_TIMED]: (data) => ({ data }),
  [SUBSCRIPTION_EXECUTED]: (data) => ({ data }),
});
