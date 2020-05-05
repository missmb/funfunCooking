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
            /* rules buat component */
            {
                test: /\.css$/i,
                exclude: /styles/,
                use: ["to-string-loader", "css-loader"]
            },
            /* rules buat global style */
            {
                test: /\.css$/i,
                include: /styles/,
                use: ["style-loader", "css-loader"]
            }
        //    {
        //        test: /\.css$/,
        //        use: [
        //            {
        //                loader: "style-loader"
        //            },
        //            {
        //                loader: "css-loader"
        //            }

        //        ]
        //    }
       ]
   }
   ,
   plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html"
    })
    //    new HtmlWebpackPlugin({
    //        template: "./src/index.html",
    //        filename: "index.html"
    //    })
   ]
}