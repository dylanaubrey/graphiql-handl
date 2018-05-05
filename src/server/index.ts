import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as http from "http";
import * as shell from "shelljs";
import * as webpack from "webpack";
import getRouter from "~/router";
import { GraphiQLHandlArgs } from "~/types";
import getWebpackConfig from "~/webpack";

export default async function startServer(args: GraphiQLHandlArgs): Promise<void> {
  const router = await getRouter(args);

  shell.echo(">>>>>>>>> created router");

  const config = getWebpackConfig(args.rootDir);
  const compiler = webpack(config);
  const app = express();

  shell.echo(">>>>>>>>> created express app");

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

  shell.echo(">>>>>>>>> created dev server");

  const server = http.createServer(app);
  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    shell.echo(`>>>>>>>>> server is listening to port ${port}`);
    shell.echo(`>>>>>>>>> http://localhost:${port}`);
    shell.echo(">>>>>>>>> waiting for webpack...");
  });
}
