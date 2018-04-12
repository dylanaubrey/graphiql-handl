import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import { Configuration, EnvironmentPlugin, SourceMapDevToolPlugin } from "webpack";
import { resolve } from "path";

export default function getWebpackConfig(rootDir: string): Configuration {
  return {
    context: resolve(rootDir),
    entry: {
      "graphiql-handl": "./lib/main/client/index.js",
      "graphiql-styles": "./node_modules/graphiql/graphiql.css",
    },
    module: {
      rules: [{
        test: /\.flow$/,
        use: {
          loader: "ignore-loader",
        },
    }, {
        include: [
          resolve(rootDir, "lib/main"),
          resolve(rootDir, "node_modules/graphiql/graphiql.css"),
        ],
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
          }],
        }),
      }, {
        include: [
          resolve(rootDir, "lib/main"),
          resolve(rootDir, "node_modules/graphiql/graphiql.css"),
        ],
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[hash].[ext]",
          },
        },
      }, {
        include: [
          resolve(rootDir, "lib/main"),
          resolve(rootDir, "node_modules/graphiql/graphiql.css"),
        ],
        test: /\.svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[hash].[ext]",
          },
        },
      }, {
        include: [
          resolve(rootDir, "lib/main"),
          resolve(rootDir, "node_modules/graphiql/graphiql.css"),
        ],
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[hash].[ext]",
          },
        },
      }, {
        enforce: "pre",
        exclude: [/node_modules/],
        test: /\.(tsx?|jsx?)$/,
        use: {
          loader: "source-map-loader",
        },
      }],
    },
    output: {
      filename: "[name].js",
      path: "/",
      publicPath: "/assets/",
    },
    plugins: [
      new EnvironmentPlugin({
        DEBUG: !!process.env.DEBUG,
        NODE_ENV: "production",
        TEST_ENV: !!process.env.TEST_ENV,
        WEB_ENV: true,
      }),
      new SourceMapDevToolPlugin({
        test: /\.(tsx?|jsx?)$/,
      }),
      new ExtractTextPlugin({ filename: "[name].css" }),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"],
    },
  };
}
