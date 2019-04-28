var path = require('path');

module.exports = {
  entry: {
    javascript: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ["transform-object-rest-spread"],
        }
      },
      {
        test: /\.html$|\.css$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
