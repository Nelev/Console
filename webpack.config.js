const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

const lessToJs = require("less-vars-to-js");
const themeVariables = lessToJs(
    fs.readFileSync(path.join(__dirname, "./src/ant-theme-vars.less"), "utf8")
);

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
    favicon: "./public/favicon.ico"
});

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./")
    },
    resolve: {
        modules: ["scripts", "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            modifyVars: themeVariables,
                            root: path.resolve(__dirname, "./")
                        }
                    }
                ]
            },
            {
                loader: "babel-loader",
                exclude: /node_modules/,
                test: /\.(js||jsx)$/,
                options: {
                    cacheDirectory: true,
                    plugins: [["import", { libraryName: "antd", style: true }]]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/,
                use: ["file"]
            },
            {
                test: /favicon\.ico$/,
                loader: "file?name=assets/icons/[name].[hash].[ext]"
            }
        ]
    },
    plugins: [htmlPlugin]
};
