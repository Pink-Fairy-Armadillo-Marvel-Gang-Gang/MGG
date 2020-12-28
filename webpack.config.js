//we're gonna first need the exports for the module and put in our mode
// you got this :-)
// import path from 'path'


module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'index' : './client/index.js',
    // 'signup' : './client/pages/signup.js',
  },
  output: {
    path : __dirname + './dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    compress: true,
    publicPath: '/dist',
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    },
  }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      { 
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader']
      }    
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
} 