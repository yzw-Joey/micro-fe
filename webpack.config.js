const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  mode: "development",
  entry: {
    index: ["./main.tsx"],
  },
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dev"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },

  devServer: {
    hot: true,
    static: "dev",
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
