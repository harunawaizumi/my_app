
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.js',
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].js',
        publicPath: './assets/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
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
    }

};