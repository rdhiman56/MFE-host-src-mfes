const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const hostPackage = require("../../../package.json");

module.exports = {
  mode: "development",
  entry: "./src/bootstrap.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "mfeApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: hostPackage.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: hostPackage.dependencies["react-dom"],
        },
      },
    }),
  ],
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
