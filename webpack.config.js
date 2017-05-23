const path = require("path");

const dirPath = path.resolve(__dirname, "web");

module.exports = {
    entry: path.join(dirPath, "dev/main.js"),
    output: {
        filename: "bundle.js",
        path: path.join(dirPath, "dist")
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ["babel-loader"]
        }, {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    watchOptions: {
        poll: true
    }
}