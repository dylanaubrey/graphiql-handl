import { Action, handleActions } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
} from "../constants/actions";

import { ObjectMap } from "../types";

export default handleActions({
  [CACHE_ENTRY_ADDED]: (state: ObjectMap = {}, action: Action<{ data: any }>): ObjectMap => {
    console.log(action.payload);
    return state;
  },
}, {});
