const webpack      = require('webpack');
const path         = require('path');
const INPRODUCTION = process.env.NODE_ENV === 'production'



module.exports = {
    // Define an entry point
    entry: './src/script1.js',

    // Define output point
    output: {
        // Define to the path folder you want to put into
         // 'dist' folder will be created automatically when you run webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { 
                // file type
                test: /\.js$/, 
                exclude: /node_modules/,
                // which loader you want to use 
                loader: "babel-loader" 
            },

            {
                // file type
                test: /\.css$/,
                // which loader you want to use
                // style-loader - this will take any css from the css webpack build and inject it into a page
                // Note: with this array arg, this will take effect from right to left
                use: [ 'style-loader','css-loader' ]

            }
          ] // rules
    }, // module

    plugins:  []
};

// If process environment and if we have any reference to NODE_ENV 
// Only run uglify in the producion
if ( INPRODUCTION ) {
    module.exports.plugins.push( new webpack.optimize.UglifyJsPlugin);
}