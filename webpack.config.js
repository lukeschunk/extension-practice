module.exports = {
  entry: {
    app: './app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  output: {
    filename: './app/bundle.js'
  },
  devtool: 'eval'
};
