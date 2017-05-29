var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');

module.exports = {
  devtool: isDebug ? 'source-map' : false,
  entry: {
    main: [
      './src/main.js'
      ,'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/js/[name].js',
    library: 'Hcpd',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
    ]
  },
  plugins: [ignore,
        new webpack.DefinePlugin({
              'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
              __DEV__: isDebug,
              '__APPID__': JSON.stringify('nea64356')//naaf87561 OR nea64356
        })
      ],
  devServer: {
    host: '0.0.0.0',
    proxy: {},
    stats: 'errors-only'
  }
};
