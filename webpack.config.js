const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

function entrySources(items) {
    if (debug) items.push('webpack-dev-server/client');
    return items;
}

module.exports = {
    mode: debug ? 'development' : 'production',
    
    entry: {
        main: entrySources([
            `./src/js/main.js`
        ]),
    },
    output: {
        path: path.join(__dirname, `build`),
        filename: '[name]-[hash].js',
    },
    
    devtool: "source-map",
    
    devServer: {
        port: 9920,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:9915/',
                changeOrigin: true,
            },
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: debug ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-react-loader',
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    
    plugins: [
        new WebpackAssetsManifest({
            publicPath: true,
            writeToDisk: true,
            output: path.join(__dirname, `build/manifest.json`),
        }),
        new HtmlWebPackPlugin({
            template: `./src/index.html`,
            filename: './index.html',
            base: './'
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[fullhash].css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/images", to: "./images" },
            ],
        }),
    ]
};
