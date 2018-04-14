const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

var devtool;

let cssExtract = new ExtractTextWebpackPlugin({filename: 'css/style.css', allChunks: true});
let sassExtract = new ExtractTextWebpackPlugin({filename: "css/style.css"})
let lessExtract = new ExtractTextWebpackPlugin({filename: "css/style.css"})

const website = {
    publicPath: 'http://localhost:8080/'
}

var plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'FF-LIANG', template: './src/index.html'}),
    new webpack.HashedModuleIdsPlugin(),
    cssExtract,
    lessExtract,
    sassExtract,
    new copyWebpackPlugin([
        {
            from: __dirname + '/src/static',
            to: './static'
        }
    ]),
    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'})
]

console.log("当前运行环境：", isPro
    ? 'production'
    : 'development')

if (isPro) {
    devtool = 'source-map';
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        //最紧凑的输出
        beautify: false,
        //删除所有的注释
        comments: false,
        //并行
        parallel: true,
        compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告
            warnings: false,
            //删除所有的 `console` 语句
            drop_console: true
        }
    }), new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    }))
} else {
    devtool = 'inline-source-map';
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    }))
}

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'material-ui',
            'immutable',
            'axios'
        ]
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: website.publicPath
    },
    resolve: {
        //引入模块的时候，可以不用扩展名
        extensions: [
            ".js", ".json", "css"
        ],
        alias: { //别名
            '@': path.join(__dirname, './src'),
        },
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    // webpack4.0 chunk配置 optimization: {     runtimeChunk: {         name:
    // "manifest"     },     splitChunks: {         cacheGroups: { commons: {
    // test: /[\\/]node_modules[\\/]/, name: "vendor", chunks: "all"             }
    //       }     } },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssExtract.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                plugins: [require('autoprefixer')],
                                minimize: true //css压缩
                            }
                        }
                    ]
                }),
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            }, {
                test: /\.(html|htm)/,
                use: 'html-withimg-loader'
            }, {
                test: /\.js[x]?$/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: [
                            'stage-3', 'es2015', 'react'
                        ],
                        plugins: ['transform-runtime',"transform-class-properties"]
                    }
                },
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: sassExtract.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }
                    ],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                }),
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: lessExtract.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            }, {
                test: /\.(html|htm)/,
                use: {
                    loader: 'html-withimg-loader'
                }
            }, {
                test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5 * 1024,
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }, {
                        loader: 'image-webpack-loader' //图片压缩
                    }
                ]
            }
        ]
    },
    plugins,
    devtool, //显示源码的提示
    devServer: {
        // proxy: {     '/api': 'http://localhost:3000' },
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        // hot: true,
        compress: true,
        historyApiFallback: true,
        inline: true
    },
    watch: false, //只有在开启监听模式时，watchOptions才有意义
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300, //监听到变化发生后等300ms再去执行动作，防止文件更新太快导致编译频率太高
        poll: 1000 //通过不停的询问文件是否改变来判断文件是否发生变化，默认每秒询问1000次
    }
}