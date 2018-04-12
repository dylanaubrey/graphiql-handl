import { buildClientSchema } from "graphql";
import { ClientHandl } from "handl";
import * as React from "react";
import { render } from "react-dom";
import { GraphiQLHandl } from "../components/graphiql-handl";
import { FetcherArgs, PreLoadedState } from "../types";

declare global {
  interface Window {
    __preLoadedState__: PreLoadedState;
  }
}

(async function startClient(): Promise<void> {
  const { headers, introspection, props, url } = window.__preLoadedState__;

  const handl = await ClientHandl.create({ headers, introspection, url });

  props.fetcher = ({ operationName, query, variables }: FetcherArgs) => {
    return handl.request(query, { operationName, variables });
  };

  props.schema = buildClientSchema(introspection);
  render(<GraphiQLHandl {...props} />, document.getElementById("root"));
}());
