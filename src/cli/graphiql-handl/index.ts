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

    try {
      let headers: ObjectMap | undefined;

      if (argv.headers) {
        headers = argv.headers.reduce((newHeaders: ObjectMap, header: string) => {
          const [key, value] = header.split(":");
          if (key && value) newHeaders[key] = value;
          return newHeaders;
        }, {});
      }

      startServer({
        headers,
        propsPath: argv.props,
        rootDir,
        schemaPath: argv.schema,
        url: argv.url,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }());
} catch (error) {
  console.log(error); // tslint:disable-line
}
