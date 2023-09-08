const ScorchWrap = require("@lavamoat/scorchwrap");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
          "leftpad": {},
          "cookie-monster": {
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
      template: "./tpl.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        'node_modules/ses/dist/lockdown.umd.js'
      ],
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
