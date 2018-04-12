import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as http from "http";
import * as webpack from "webpack";
import getRouter from "../router";
import { GraphiQLHandlArgs } from "../types";
import getWebpackConfig from "../webpack";

export default async function startServer(args: GraphiQLHandlArgs): Promise<void> {
  const app = express();

  console.log(">>>>>>>>> created express app"); // tslint:disable-line

  const router = await getRouter(args);
  const config = getWebpackConfig(args.rootDir);
  const compiler = webpack(config);

  app
    .use(require("webpack-dev-middleware")(compiler, {
      logLevel: "debug",
      publicPath: config.output && config.output.publicPath,
      stats: { colors: true },
    }))
    .use(cors())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(router);

  console.log(">>>>>>>>> created dev server"); // tslint:disable-line

  const server = http.createServer(app);
  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    console.log(`>>>>>>>>> server is listening to port ${port}`); // tslint:disable-line
  });
}
