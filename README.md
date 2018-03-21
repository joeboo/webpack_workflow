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
   npm install --save-dev webpack

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

5. Minification and Environments
  
  5.1 
    plugin:  [
        new webpack.optimize.UglifyJsPlugin()
    ]

5.2
// If process environment and if we have any reference to NODE_ENV 
// Only run uglify in the producion
if ( INPRODUCTION ) {
    module.exports.plugins.push( new webpack.optimize.UglifyJsPlugin);
}
