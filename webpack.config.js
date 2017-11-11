
const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS = [
    'faker', 'lodash', 'react', 'react-dom', 'react-input-range',
    'react-redux', 'react-router', 'redux', 'redux-form', 'redux-thunk'
]

module.exports = {
    entry: {
        index: './index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        filename: '[name].js',
        publicPath: './assets/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        },
                        //'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        fsbx.BabelPlugin({
            test: /\.js$/,
            config: {
                sourceMaps: true,
                presets: ["latest"],
            },
        }),
    ]

};