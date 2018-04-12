import {
  execute,
  GraphQLSchema,
  IntrospectionQuery,
  introspectionQuery,
  parse,
} from "graphql";

import "isomorphic-fetch";
import * as path from "path";
import * as yargs from "yargs";
import startServer from "../../server";
import { ObjectMap } from "../../types";

const argv = yargs.option("headers", { type: "array" }).argv;
const rootDir = process.cwd();

if (argv.tsconfig) {
  const tsConfig = require(path.resolve(rootDir, argv.tsconfig));
  require("ts-node").register(tsConfig);
}

try {
  (async function graphiqlHandl(): Promise<void> {
    if (!argv.url) {
      const message = "GraphiqlHandl expected the 'url' argument to be a string.";
      return Promise.reject(new TypeError(message));
    }

    let introspection: IntrospectionQuery | undefined;
    let schema: GraphQLSchema | undefined;
    let result: { data?: ObjectMap; [key: string]: any; };

    try {
      let headers: ObjectMap | undefined;

      if (argv.headers) {
        headers = argv.headers.reduce((newHeaders: ObjectMap, header: string) => {
          const [key, value] = header.split(":");
          if (key && value) newHeaders[key] = value;
          return newHeaders;
        }, {});

        console.log(`>>>>>>>>> received headers ${JSON.stringify(headers)}`); // tslint:disable-line
      }

      if (argv.schema) {
        const mod = require(path.resolve(rootDir, argv.schema));
        schema = mod.default ? mod.default : mod;

        if (schema instanceof GraphQLSchema) {
          result = await execute(schema, parse(introspectionQuery));
          introspection = result.data as IntrospectionQuery;
        }
      } else if (argv.url) {
        console.log(`>>>>>>>>> received url ${argv.url}`); // tslint:disable-line
        console.log(">>>>>>>>> fetching schema"); // tslint:disable-line

        const res = await fetch(argv.url, {
          headers: new Headers(headers),
        });

        result = await res.json();

        if (!result || !result.data) {
          return Promise.reject(new Error("GraphiqlHandl did not receive any data from the introspection query."));
        }

        console.log(">>>>>>>>> received schema"); // tslint:disable-line

        introspection = result.data as IntrospectionQuery;
      }

      let props: ObjectMap = {};

      if (argv.props) {
        props = require(path.resolve(rootDir, argv.props));
      }

      startServer({
        headers,
        introspection,
        props,
        rootDir,
        url: argv.url,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }());
} catch (error) {
  console.log(error); // tslint:disable-line
}
