import { Action, ActionFunctionAny, createActions } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
  CACHE_ENTRY_QUERIED,
  FETCH_EXECUTED,
  PARTIAL_COMPILED,
  REQUEST_EXECUTED,
  REQUEST_TIMED,
  SCHEMA_TYPES_RECEIVED,
  SUBSCRIPTION_EXECUTED,
  TYPE_CACHE_CONTROL_ADDED,
  TYPE_TERM_SEARCHED,
} from "~/constants/actions";

export const {
  cacheEntryAdded,
  cacheEntryQueried,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  schemaTypesReceived,
  subscriptionExecuted,
  typeCacheControlAdded,
  typeTermSearched,
}: { [key: string]: ActionFunctionAny<Action<{ data: any }>>;  } = createActions({
  [CACHE_ENTRY_ADDED]: (data) => ({ data }),
  [CACHE_ENTRY_QUERIED]: (data) => ({ data }),
  [FETCH_EXECUTED]: (data) => ({ data }),
  [PARTIAL_COMPILED]: (data) => ({ data }),
  [REQUEST_EXECUTED]: (data) => ({ data }),
  [REQUEST_TIMED]: (data) => ({ data }),
  [SCHEMA_TYPES_RECEIVED]: (data) => ({ data }),
  [SUBSCRIPTION_EXECUTED]: (data) => ({ data }),
  [TYPE_CACHE_CONTROL_ADDED]: (data) => ({ data }),
  [TYPE_TERM_SEARCHED]: (data) => ({ data }),
});
