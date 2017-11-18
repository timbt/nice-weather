module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/scripts/bundle.js',
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
      }
};