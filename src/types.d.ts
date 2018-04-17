import { ExecutionResult, GraphQLSchema, GraphQLType } from "graphql";
import { HandlClientRequestResult } from "handl";

export interface FetcherArgs {
  query: string;
  variables: ObjectMap;
  operationName: string;
}

export interface GraphiQLHandlArgs {
  headers?: ObjectMap;
  propsPath?: string;
  rootDir: string;
  schemaPath?: string;
  url: string;
}

export interface ObjectMap {
  [key: string]: any;
}

export interface PreLoadedState {
  headers?: ObjectMap;
  introspection: IntrospectionQuery;
  props: GraphiQLProps;
  url: string;
}
