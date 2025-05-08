const LavaMoatPlugin = require("@lavamoat/webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const config = {
  entry: "./app.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist_none"),
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({})],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "ts",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

const configLM = {
  ...config,
  output: {
    path: path.resolve(__dirname, "dist_lava"),
  },
  plugins: [
    new LavaMoatPlugin({
      generatePolicy: true,
      runChecks: true,
      HtmlWebpackPluginInterop: true,
      emitPolicySnapshot: true,
      scuttleGlobalThis: {
        enabled: true,
        exceptions: ["Reflect","Symbol","Object","Array","Set","String","Number","Boolean","Map","WeakMap","WeakSet","BigInt","Date","Function","RegExp","Error","Promise","MapIterator","SetIterator"],
      }
    }),
    new HtmlWebpackPlugin({}),
  ],
};

module.exports = [config, configLM];
