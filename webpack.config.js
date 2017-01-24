var HtmlWebPackPlugin = require('html-webpack-plugin')
// new instance of above plugin
var HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'

});

module.exports = {
  entry: [
     './app/index.js'
  ],
  output: {
    // __dirname refs to current dir
    path: __dirname + "/dist",
    filename: "index_buundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/,loader: "babel-loader"}
    ]
  },
  plugins:[
    HtmlWebPackPluginConfig
  ]
};

// -Takes entry file
// -Run it through the loader
// -Convert it JSX to JS - output to /dist in filename
// -plugin will run and inject index.html into /dist, accessing the bundle_js (outputted JS)
