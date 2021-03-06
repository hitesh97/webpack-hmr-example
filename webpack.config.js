const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'www');

module.exports = {
    entry: './client/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin([dist]),
        new HtmlWebpackPlugin({
            title: 'Hot Module Reload'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, dist)
    }
};