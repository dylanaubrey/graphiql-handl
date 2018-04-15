import { createActions } from "redux-actions";

export const {
  cacheEntryAdded,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  subscriptionExecuted,
} = createActions({
  CACHE_ENTRY_ADDED: (data) => ({ data }),
  FETCH_EXECUTED: (data) => ({ data }),
  PARTIAL_COMPILED: (data) => ({ data }),
  REQUEST_EXECUTED: (data) => ({ data }),
  REQUEST_TIMED: (data) => ({ data }),
  SUBSCRIPTION_EXECUTED: (data) => ({ data }),
});
