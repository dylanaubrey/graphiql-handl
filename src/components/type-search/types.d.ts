import { Action, ActionFunctionAny } from "redux-actions";
import { ObjectMap } from "~/types";

export interface TypeSearchDispatchToProps {
  termSearched: ActionFunctionAny<Action<{ data: any; }>>;
}

export interface TypeSearchProps {
  searchValue?: string;
  termSearched: ActionFunctionAny<Action<{ data: any; }>>;
}

export interface TypeSearchState {
  searchValue: string;
}
