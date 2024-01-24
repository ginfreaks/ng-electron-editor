const path = require("path");
const baseConfig = require("./webpack.config");

module.exports = {
  ...baseConfig,
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.join(process.cwd(), "dist", "ng-editor"),
    filename: "shell.js",
  },
};
