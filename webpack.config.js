var path = require('path');

module.exports = {
  entry: {
    javascript: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        exclude: ['node_modules'],
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ["transform-object-rest-spread"],
        }
      }
    ]
  }
};
