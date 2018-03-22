const webpack           = require('webpack');
const path              = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Inproduction = (process.env.NODE_ENV === 'production');

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

// const loaderOption = new webpack.LoaderOptionsPlugin({
//   minimize: true,
//   debug: true,
//   options: {
//     context: __dirname
//   }
// })

// var webpackConfig = {
//   entry: 'index.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'index_bundle.js'
//   },
//   plugins: [new HtmlWebpackPlugin()]
// };

module.exports = {
    // In entry you can either refence a string or object
    entry: {
        // Example 1
        // app: './src/script1.js'
        // Example 2
        // by declaring 'app:' allow you to change the name of the file
        app: [
            './src/script1.js',
            './src/css/style.scss'
        ],
        // main:'./src/script1.js',
        // vendor:['jquery']
    },

    // Define output point
    output: {
        // Define to the path folder you want to put into
         // 'dist' folder will be created automatically when you run webpack
        path: path.resolve(__dirname, 'dist'),
        // '[name] is defined above in entry object
        // [chuckhash] - this will corespond to current chunk
        // in this case would be main or vendor
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            { 
                // Javascript ES5/6
                // file type
                test: /\.js$/, 
                exclude: /node_modules/,
                // which loader you want to use 
                loader: "babel-loader" 
            },

            //{
                // css
                // file type
                // test: /\.css$/,
                // which loader you want to use
                // style-loader - this will take any css from the css webpack build and inject it into a page
                // Note: with this array arg, this will take effect from right to left
                // use: [ 'style-loader','css-loader' ]
            //},

            // SASS
            {
                test: /\.s[ac]ss$/,
                // use: [ 'style-loader','css-loader','sass-loader' ]    
                // Code spliting to extracting css 
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                        // {
                        //     loader: "css-loader"
                        // }, {
                        //     loader: "sass-loader"
                        // }
                    // ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }


          ] // rules
    }, // module

    plugins: [
        new ExtractTextPlugin("[name].[chunkhash].css"),
        new webpack.LoaderOptionsPlugin({
          minimize: Inproduction,
        }),

        new HtmlWebpackPlugin({
            // Writing Your Own Templates
                title: 'Custom template TEST',
                template: path.resolve(__dirname, 'index.html'),// Load a custom template (lodash by default see the FAQ for details)
                inject: true,
                minify: {
                    collapseWhitespace: true
                }
             
        })
    ]
};

// If process environment and if we have any reference to NODE_ENV 
// Only run uglify in the producion
if ( Inproduction ) {
    module.exports.plugins.push( 
            new UglifyJsPlugin()

    )

    // module.exports.plugins.push(
        // new OptimizeCssAssetsPlugin()
    // )
}



















