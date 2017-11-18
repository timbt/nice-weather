path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'public/scripts/'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'ui'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devServer: {
        contentBase: './public/',
        port: 8080,
        open: true,
        watchContentBase: true,
        publicPath: '/scripts/'
      }
};