var path = require("path");
var webpack = require("webpack");

module.exports = env => {
    return {
        entry: path.resolve(__dirname, "./src/Main.ts"),
        output: {
            filename: "Main.js",
            path: __dirname + "/dev"
        },
        devServer: {
            disableHostCheck: true
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [{ loader: "ts-loader" }]
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js", ".json"],
            modules: ["node_modules", "src"],
            symlinks: false
        },
        devtool: "source-map",
        plugins: [
        ]
    };
};
