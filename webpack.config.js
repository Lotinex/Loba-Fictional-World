const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx']
  },
  entry: "./src/Main.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'dist/index.html',
    inject: false
  })],
  devServer: {
      port: 7010,
      historyApiFallback: true
  }
};
