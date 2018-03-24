const webpack = require('webpack')
const glob = require('glob')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const Inproduction = (process.env.NODE_ENV === 'production')

/** 
 * Clean directory when compiling
*/
let pathsToClean = [
  'dist',
  'build'
];

// the clean options to use
let cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false
};


module.exports = {
  entry: {   
    app: [
      './src/script1.js',
      './src/css/style.scss'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[hash:12].[ext]&outputPath=images/&publicPath=images',
          'image-webpack-loader'
        ]
      }

    ] 
  }, 
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, 
    port: 9000,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: Inproduction
    }),
    new HtmlWebpackPlugin({
      title: 'Custom template TEST',
      template: path.resolve(__dirname, 'index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    }),

    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, '*.html')),
      minimize: Inproduction
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
};

if (Inproduction) {
  module.exports.plugins.push(
    new UglifyJsPlugin()
  );
}
