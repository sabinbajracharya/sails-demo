const webpack = require('webpack');
module.exports = {
 devtool:'source-map',
 //devtool: 'cheap-module-source-map',
 entry: './assets/reactjs/index.js',
 output: {
   path: __dirname + "/assets/js/",
   filename: "react.js"
 },
 module: {
   loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
