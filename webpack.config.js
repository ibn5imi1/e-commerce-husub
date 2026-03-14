const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",

    entry: {
        app: "./src/index.js"
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: false,
        port: 2001,
        open: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i,
                exclude: /bootstrap\.min\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "./images/[name][ext]"
                }
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
        filename: "product.html",
        template: "./src/product.html"
    }),
    new HtmlWebpackPlugin({
        filename: "checkout.html",
        template: "./src/checkout.html"
    }),
    new HtmlWebpackPlugin({
        filename: "payment.html",
        template: "./src/payment.html"
    }),
    new HtmlWebpackPlugin({
        filename: "search.html",
        template: "./src/search.html"
    }),
    new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./src/contact.html"
    }),
    new MiniCssExtractPlugin({
        filename: "css/style.css"
    }),
    new CssMinimizerPlugin()
    ],

    // plugins: [new HtmlWebpackPlugin({
    //     filename: "product.html",
    //     template: "./src/product.html"
    // })]

};