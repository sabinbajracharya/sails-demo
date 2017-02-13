module.exports = function(grunt) {

  grunt.config.set('webpack', {
    dev: {
      devtool:'source-map',
      entry: './assets/reactjs/index.js',
      output: {
        path: "./assets/js/",
        filename: "react.js"
      },
       stats: {
         colors: true,
         reasons: true
       },
       module: {
         loaders: [{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader"
         }]
       }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
};
