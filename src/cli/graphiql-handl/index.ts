import { buildClientSchema, GraphQLSchema, IntrospectionQuery } from "graphql";
import * as path from "path";
import * as yargs from "yargs";
import { ObjectMap } from "../../types";

const argv = yargs.option("headers", { type: "array" }).argv;
const rootDir = process.cwd();

if (argv.tsconfig) {
  const tsConfig = require(path.resolve(rootDir, argv.tsconfig));
  require("ts-node").register(tsConfig);
}

try {
  (async function startGraphiqlHandl(): Promise<void> {
    if (!argv.schema && !argv.url) {
      const message = "GraphqlHandl requires either the 'schema' or 'url' argument, but not neither.";
      return Promise.reject(new TypeError(message));
    }

    let schema: GraphQLSchema;

    try {
      if (argv.schema) {
        const mod = require(path.resolve(rootDir, argv.schema));
        schema = mod.default ? mod.default : mod;
      } else if (argv.url) {
        let headers: ObjectMap | undefined;

        if (argv.headers) {
          headers = argv.headers.reduce((newHeaders: ObjectMap, header: string) => {
            const [key, value] = header.split(":");
            if (key && value) newHeaders[key] = value;
            return newHeaders;
          }, {});
        }

        const res = await fetch(argv.url, {
          headers: new Headers(headers),
        });

        const result: { data?: IntrospectionQuery; [key: string]: any; } = await res.json();

        if (!result || !result.data) {
          return Promise.reject(new Error("GraphqlHandl did not receive any data from the introspection query."));
        }

        schema = buildClientSchema(result.data);
      }

      // TODO
    } catch (error) {
      return Promise.reject(error);
    }
  }());
} catch (error) {
  console.log(error); // tslint:disable-line
}
