const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");



module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/event.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/ticket.js"
      },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static", 
        // the report outputs to an HTML file in the dist folder
      })
    ],
    mode: 'development'


};
