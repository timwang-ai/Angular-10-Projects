const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(process.cwd(), 'src', 'electron', 'main.ts'),
  output: {
    path: path.join(process.cwd(), 'dist', 'my-editor'),
    filename: 'shell.js'
  },
  module: {
    rules: [
      {
        loader: 'ts-loader'
      }
    ]
  },
  target: 'electron-main'
};
