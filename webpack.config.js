const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 시작점
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },

  // 웹팩 작업을 통해 생성된 결과물
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  // devTool: "source-map", // webpack이 업그레이드 되면서 더이상 설정 하지 않아도 됩니다.
  module: {
    rules: [
      {
        test: /\.s[ac]ss?$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
