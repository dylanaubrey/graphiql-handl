import thunk from "redux-thunk";
import { buildClientSchema } from "graphql";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { ClientHandl, HandlClientRequestResultData } from "handl";
import { schemaTypesReceived } from "~/actions";
import GraphiQLHandl from "~/components/graphiql-handl";
import handlEventListeners from "~/handl-event-listeners";
import rootReducer from "~/reducers";
import { getAddedTypeCacheControls } from "~/selectors/added-type-cache-controls";
import { FetcherArgs, ObjectMap, PreLoadedState } from "~/types";

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
  store.dispatch(schemaTypesReceived(await handl.getSchemaTypes()));
  let typeCacheControls: ObjectMap;

  store.subscribe(() => {
    const typeCacheControlsAdded = getAddedTypeCacheControls(store.getState());
    if (typeCacheControlsAdded === typeCacheControls) return;
    typeCacheControls = typeCacheControlsAdded;
    handl.setTypeCacheControls(typeCacheControls);
  });

  props.fetcher = async ({ operationName, query, variables }: FetcherArgs) => {
    const result = await handl.request(query, { operationName, variables }) as HandlClientRequestResultData;
    return { ...result, cacheMetadata: ClientHandl.dehydrateCacheMetadata(result.cacheMetadata) };
  };

  props.schema = buildClientSchema(introspection);

  render(
    <Provider store={store}>
      <GraphiQLHandl {...props} />
    </Provider>,
    document.getElementById("root"));
}());
