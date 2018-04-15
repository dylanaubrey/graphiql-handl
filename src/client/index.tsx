import { buildClientSchema } from "graphql";
import { ClientHandl } from "handl";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { GraphiQLHandl } from "../components/graphiql-handl";
import handlEventListeners from "../handl-event-listeners";
import rootReducer from "./reducers";
import { FetcherArgs, PreLoadedState } from "../types";

declare global {
  interface Window {
    __preLoadedState__: PreLoadedState;
  }
}

(async function startClient(): Promise<void> {
  const { headers, introspection, props, url } = window.__preLoadedState__;
  const handl = await ClientHandl.create({ headers, introspection, url });
  const store = createStore(rootReducer, applyMiddleware(thunk));
  handlEventListeners(handl, store.dispatch);

  props.fetcher = ({ operationName, query, variables }: FetcherArgs) => {
    return handl.request(query, { operationName, variables });
  };

  props.schema = buildClientSchema(introspection);

  render(
    <Provider store={store}>
      <GraphiQLHandl {...props} />
    </Provider>,
    document.getElementById("root"));
}());
