const ScorchWrap = require("@lavamoat/scorchwrap");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js",
  mode: "development",
  output: {
    filename: "app.bundle.js",
  },
  devtool: "source-map",
  plugins: [
    new ScorchWrap({
      policy: {
        resources: {
          "app": {
            globals: {
              document: true,
              location: true,
              console: true,
            },
          },
          "app>cookie-monster": {
            globals: {
              fetch: true,
              Math: true,
              encodeURI: true,
            },
          },
        },
      },
      runChecks: true,
      diagnosticsVerbosity: 2,
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
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
