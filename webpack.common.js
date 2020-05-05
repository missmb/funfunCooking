const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.scss$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
                //    ,
                //    {
                //     // Loader for webpack to process CSS with PostCSS
                //     loader: 'postcss-loader',
                //     options: {
                //       plugins: function () {
                //         return [
                //           require('autoprefixer')
                //         ];
                //       }
                //     }
                //   }
                //   ,
                //   {
                //     // Loads a SASS/SCSS file and compiles it to CSS
                //     loader: 'sass-loader'
                //   }
               ]
           }
       ]
   },
   plugins: [
    //    new webpack.providerPlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery' : 'jquery'
    //    }),
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}