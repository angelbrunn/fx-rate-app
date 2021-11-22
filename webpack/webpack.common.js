const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

require('dotenv').config();

module.exports = {
    entry: path.join(__dirname, '../src/index.jsx'),
    devtool: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: { compact: true }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/icons/'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            // LOARD ALL VARIALS INTO CONFIG - DEPENT ENV
            CONFIG: {
                ENV_MODE: JSON.stringify(process.env.ENV_MODE),
                PROJECT_NAME: JSON.stringify(process.env.PROJECT_NAME),
                PATH_BASE: JSON.stringify(process.env.PATH_BASE),
                PATH_ASSET_FX_RATE_FOLDER: JSON.stringify(
                    process.env.PATH_ASSET_FX_RATE_FOLDER
                ),
                PATH_FX_RATE_FOLDER: JSON.stringify(
                    process.env.PATH_FX_RATE_FOLDER
                ),
                URL_FIXER_API: JSON.stringify(process.env.URL_FIXER_API),
                KEY_FIXER_API: JSON.stringify(process.env.KEY_FIXER_API),
                API_FIXER_SYMBOLS: JSON.stringify(
                    process.env.API_FIXER_SYMBOLS
                ),
                API_FIXER_LATEST: JSON.stringify(process.env.API_FIXER_LATEST)
            }
        }),
        // THIS CLEAN THE DIST FOLDER - dont work
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
            title: process.env.PROJECT_NAME,
            base_path: process.env.PATH_SWF_PWA_FOLDER,
            base_path_asset: process.env.PATH_ASSET_PWA_FOLDER
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].bundle.css',
            chunkFilename: '[hash].bundle.css'
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/assets'),
                    to: '../dist/assets/'
                },
                {
                    from: path.join(__dirname, '../src/utils/manifest.json'),
                    to: path.join(__dirname, '../dist/manifest.json')
                },
                {
                    from: path.join(__dirname, '../src/i18n'),
                    to: path.join(__dirname, '../dist/i18n')
                }
            ]
        })
    ]
};
