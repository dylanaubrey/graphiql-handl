import { Action, ActionFunctionAny } from "redux-actions";
import { ObjectMap } from "~/types";

export interface TypeCacheControlFormDispatchToProps {
  cacheControlAdded: ActionFunctionAny<Action<{ data: any; }>>;
}

export interface TypeCacheControlFormProps {
  cacheControlAdded: ActionFunctionAny<Action<{ data: any; }>>;
  id: string;
  inputValue?: string;
  listType: "added" | "empty";
}

export interface TypeCacheControlFormState {
  inputValue: string;
}
