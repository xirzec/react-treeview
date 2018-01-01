var path = require('path');

module.exports = {
    entry: {
        app: "./src/app.tsx",
    },
    output: {
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].[hash].map',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true
    },
    devtool: 'source-map',
}