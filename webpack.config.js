module.exports = {
  entry: './src/App.js',
  output: {
    path: './build',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
};