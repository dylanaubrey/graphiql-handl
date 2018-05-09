import { Action, ActionFunctionAny } from "redux-actions";
import { ObjectMap } from "~/types";

export interface TypeCacheControlPanelDispatchToProps {
  cacheControlAdded: ActionFunctionAny<Action<{ data: any; }>>;
}

export interface TypeCacheControlPanelFormProps {
  cacheControlAdded: ActionFunctionAny<Action<{ data: any; }>>;
  id: string;
  value?: string;
}

export interface TypeCacheControlPanelFormState {
  inputValue: string;
}
