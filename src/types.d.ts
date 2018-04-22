import { ExecutionResult, GraphQLSchema, GraphQLType } from "graphql";
import { HandlClientRequestResult } from "handl";

export interface ActiveRequestState {
  dataEntities: string[];
  operation: OperationTypes;
  operationName?: string;
  queryPaths: string[];
  handlID: string;
  responses: string[];
}

export type CacheTypes = "responses" | "queryPaths" | "dataEntities";

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

export interface HandlPayload {
  cache: CacheTypes;
  key: string;
  operation: OperationTypes;
  operationName: string;
  requestID: string;
  value: any;
  [key: string]: any;
}

export interface ObjectMap {
  [key: string]: any;
}

export type OperationTypes = "query" | "mutation" | "subscription";

export interface PreLoadedState {
  headers?: ObjectMap;
  introspection: IntrospectionQuery;
  props: GraphiQLProps;
  url: string;
}

export interface ReduxState {
  activeRequest: ActiveRequestState,
  dataEntities: [],
  queryPaths: [],
  response: [],
}
