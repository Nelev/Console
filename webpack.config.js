const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
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
                test: /\.less$/,
                loader: "less-loader",
                options: {
                    modifyVars: {
                        "primary-color": "black",
                        "link-color": "#1DA57A",
                        "border-radius-base": "2px"
                    },
                    javascriptEnabled: true
                }
            }
        ]
    },
    plugins: [htmlPlugin]
};
