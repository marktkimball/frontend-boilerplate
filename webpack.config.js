var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'react-helmet'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /src/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
       test: /.(ico|png|jpg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
       loader: 'url?limit=10000'
     }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    process.env.NODE_ENV === 'production' && new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false, semicolons: true}})
  ].filter(el => !!el),
  devServer: {
    contentBase: './src',
    hot: true
  }
}
