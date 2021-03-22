const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

let env = (process.env.NODE_ENV === 'development') ? 'development' : 'production'
let isDevEnv = env === 'development'
const partialConfig = require(`./webpack.config.${(isDevEnv) ? 'dev' : 'prod'}.js`)

module.exports = merge(partialConfig, {
    mode: env,
    entry: './src/index.js',
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ]
}) 