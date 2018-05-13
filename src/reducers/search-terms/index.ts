import { get, isString } from "lodash";
import { Action } from "redux-actions";
import { TYPE_TERM_SEARCHED } from "~/constants/actions";
import { ActionPayloads, SearchTermsState, TermSearchedPayload } from "~/types";

const initialState: SearchTermsState = {
  types: "",
};

export default function searchTerms(
  state: SearchTermsState = initialState,
  action: Action<{ data: ActionPayloads }>,
): SearchTermsState {
  switch (action.type) {
    case TYPE_TERM_SEARCHED: {
      const data = get(action, ["payload", "data"], null) as TermSearchedPayload;
      if (!isString(data)) return state;
      return { ...state, types: data };
    }
    default: {
      return state;
    }
  }
}
