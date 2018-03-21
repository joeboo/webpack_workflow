const webpack = require('webpack');
const path    = require('path');


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
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
          ] // rules
    } // module
};

