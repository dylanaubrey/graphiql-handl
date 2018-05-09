import { Action, ActionFunctionAny, createActions } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
  FETCH_EXECUTED,
  PARTIAL_COMPILED,
  REQUEST_EXECUTED,
  REQUEST_TIMED,
  SCHEMA_TYPES_RECEIVED,
  SUBSCRIPTION_EXECUTED,
  TYPE_CACHE_CONTROL_ADDED,
} from "~/constants/actions";

export const {
  cacheEntryAdded,
  fetchExecuted,
  partialCompiled,
  requestExecuted,
  requestTimed,
  schemaTypesReceived,
  subscriptionExecuted,
  typeCacheControlAdded,
}: { [key: string]: ActionFunctionAny<Action<{ data: any }>>;  } = createActions({
  [CACHE_ENTRY_ADDED]: (data) => ({ data }),
  [FETCH_EXECUTED]: (data) => ({ data }),
  [PARTIAL_COMPILED]: (data) => ({ data }),
  [REQUEST_EXECUTED]: (data) => ({ data }),
  [REQUEST_TIMED]: (data) => ({ data }),
  [SCHEMA_TYPES_RECEIVED]: (data) => ({ data }),
  [SUBSCRIPTION_EXECUTED]: (data) => ({ data }),
  [TYPE_CACHE_CONTROL_ADDED]: (data) => ({ data }),
});
