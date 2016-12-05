/**
 * @file   webpack.config.js
 * @author baidu.inc
 */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var glob = require('glob');

// 一些路径信息
var ROOT_PATH = path.resolve(__dirname);
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var REACT = path.resolve(NODE_PATH, 'react/dist/react.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.js');

function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};
    console.log(files.length)
     files.forEach(function(filepath) {
         var split = filepath.split('/');
         var name = split[0];
         entries[name] = filepath;
     });
     return entries;
}
var entriesDemo = getEntries('*/examples/Index.jsx');
var pluginsDemo = [];
Object.keys(entriesDemo).forEach(function(name, i, o) {
    // 每个页面生成一个html
    var plugin = new HtmlWebpackPlugin({
        title: name,
        filename: name.toLowerCase() + '/examples/index.html',
        template: './index.html.tpl',
        // chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: [
            'vendors',
            name
        ],
        inject: 'body',
        chunksSortMode: 'dependency'
    });
    pluginsDemo.push(plugin);  
});
module.exports = {
    context: path.join(__dirname, ''),
    // 获取项目入口JS文件
    entry: Object.assign({
        vendors: [
            'react',
            'react-dom',
            'webpack-zepto'
        ]
    }, entriesDemo),
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, 'dist'),
        // 根据entry的入口名称生成多个js文件
        filename: '/assets/js/[name].js',
        chunkFilename: '/assets/js/[name].chunk.js',
        // 用于配置文件发布路径，如CDN或本地服务器
        publicPath: ''
    },
    // 各种加载器，让各种文件格式可用require引用
    module: {
        noParse: [REACT],
        // preLoaders: [
        //     {
        //         test: /\.js[x]?$/,
        //         loader: 'source-map-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                exclude: /\.useable\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loader: 'style/useable!css!postcss!less'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=8192'
            }
        ]
    },
    postcss: [
        autoprefixer
    ],
    // 在JS中import加载jsx这种扩展名
    resolve: {
        root: path.resolve(ROOT_PATH, ''),
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        // 配置别名，在项目中可缩减引用路径
        alias: {
            'react': REACT,
            'react-dom': REACTDOM
        }
    },

    // 生成sourcemap,便于开发调试
    devtool: 'cheap-source-map',
    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        host: '0.0.0.0'
    },

    plugins: pluginsDemo.concat([
            new webpack.optimize.CommonsChunkPlugin('vendors', '/assets/js/vendors.js'),
            // 提供全局的zepto，在模块中使用无需用require引入
            new webpack.ProvidePlugin({
                $: 'webpack-zepto'
            })]
        )
};
