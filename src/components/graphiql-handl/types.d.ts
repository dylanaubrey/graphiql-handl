export interface GraphiQLMaskProps {
  mask: boolean;
}

export interface GraphiQLProps {
  defaultQuery?: string;
  editorTheme?: string;
  fetcher?: (value: FetcherArgs) => Promise<HandlClientRequestResult>
  operationName?: string;
  query?: string;
  response?: ObjectMap;
  schema?: GraphQLSchema;
  variables?: string;
}

export interface GraphiQLState {
  explorerOpen: boolean;
}
