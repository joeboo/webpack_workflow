The following will guide you on how to install/using webpack within your project:

loader allows you to load any file format that you wish.
e.g main.js
require('./style.scss')

Note: if you use webpack 4 and above you need to config to production mode
https://www.valentinog.com/blog/webpack-4-tutorial/
Command lines:
  - npm run dev
  - npm run build
  - npm production

1. Install webpack
   npm install --save-dev webpack (Currently using V.4.2.0)


2. Install babel
   npm install --save-dev babel-loader babel-core

	2.1 Install any presents
	    npm install babel-preset-env --save-dev

	2.2 Config webpack.config - webpack to use babel to transform the code

3. Install css loader

   3.1 css-loader
   		npm install style-loader --save-dev

   3.2 style-loader
  		npm install css-loader --save-dev

 4. Install SASS Loader

 	4.1 SASS Loader
  		npm install node-sass sass-loader --save-dev

  4.2 Extract CSS to a Dedicated File
   4.2.1 Require the plugin
         - const ExtractTextPlugin = require("extract-text-webpack-plugin");
   4.2.2 Reference the plugin
         - extractSass
   4.2.3 Test any file and extract them
         -  see more infor here: https://github.com/webpack-contrib/sass-loader

    Note: Usually, it's recommended to extract the style sheets into a dedicated file in production using the ExtractTextPlugin. This way your styles are not dependent on JavaScript

    Follow this link for an intruction: https://github.com/webpack-contrib/sass-loader

5. Minification and Environments  
  5.1 
    plugin:  [
            new UglifyJsPlugin()
    ]
 Note: 
 https://github.com/webpack-contrib/uglifyjs-webpack-plugin

  5.2
  // If process environment and if we have any reference to NODE_ENV 
  // Only run uglify in the producion
  if ( INPRODUCTION ) {
      module.exports.plugins.push( new webpack.optimize.UglifyJsPlugin);
  }

6. HTML Plugin
    This plugin generate an HTML file for you.
    https://webpack.js.org/plugins/html-webpack-plugin/
    https://github.com/jantimon/html-webpack-plugin#configuration

  6.1.1 Installl HtmlWebpackPlugin
        npm install --save-dev html-webpack-plugin
  6.1.2 Require the package
        const HtmlWebpackPlugin = require('html-webpack-plugin');

  Note:
  By including this snippet below will allow you to inject a custom title into your output file.
  <%= htmlWebpackPlugin.options.title %>

7. Dev Server
   https://webpack.js.org/configuration/dev-server/

   7.1.0. Install webpack-dev-server
          npm install webpack-dev-server --save-dev
          "dev": "webpack-dev-server" when running on this mode you will not be able to see the compiled files in disc directory, but you still accessing the files.
                        AND 
          "dev": "webpack --mode development"  when running on this mode you will be the compiled files in disc directory.


8. Strip Unused CSS
  https://github.com/webpack-contrib/purifycss-webpack

  8.8.1 Install purifycss
        npm i -D purifycss-webpack purify-css

9. Clean for WebPack
https://github.com/johnagan/clean-webpack-plugin

      9.1.0 Install clean for webpack and follow the link for an intruction
      npm i clean-webpack-plugin --save-dev

10. Image Loader

      10.1.0 Install image webpack loader
            npm install image-webpack-loader --save-dev
            For more information of how to use this plugin. I find it easier to watch the following video:-
                  https://www.youtube.com/watch?v=cDLfpth5a3s&index=11&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

11.  Using third party libray
      11.1.0 Import the plugin
            e.g In this case we're using jQuery
                  - import 'jquery';

      11.2.0 Added the following code into your plugin
            new webpack.ProvidePlugin({
                  $: 'jquery',
                  jQuery: 'jquery'
            })




