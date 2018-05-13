import { ExecutionResult, GraphQLSchema, GraphQLType } from "graphql";
import { HandlClientRequestResult } from "handl";

export type ActionPayloads = CacheEntryAddedPayload | RequestTimedPayload | SchemaTypesReceivedPayload;

export interface ActiveRequestState {
  dataEntities: string[];
  duration: number;
  handlID: string;
  operation: OperationTypes;
  operationName?: string;
  queryPaths: string[];
  responses: string[];
  startTime: number;
}

export interface CacheEntryAddedPayload {
  cache: CacheTypes;
  key: string;
  operation: OperationTypes;
  operationName: string;
  requestID: string;
  value: any;
  [key: string]: any;
}

export type CacheTypes = "responses" | "queryPaths" | "dataEntities";
export type ExplorerPanels = "typeCacheControl";

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

export type OperationTypes = "query" | "mutation" | "subscription";

export interface PreLoadedState {
  headers?: ObjectMap;
  introspection: IntrospectionQuery;
  props: GraphiQLProps;
  url: string;
}

export interface ReduxState {
  activeRequest: ActiveRequestState;
  dataEntities: ObjectMap;
  queryPaths: ObjectMap;
  responses: ObjectMap;
  schemaTypes: ObjectMap;
  searchTerms: SearchTermsState;
}

export interface RequestTimedPayload {
  duration: number;
  endTime: number;
  handlID: string;
  operation: OperationTypes;
  operationName: string;
  startTime: number;
}

export type SchemaTypesReceivedPayload = string[];
export type TermSearchedPayload = string;

export interface SearchTermsState {
  types: string;
}

export interface TypeCacheControlAddedPayload {
  cacheControl: string;
  typeName: string;
}
