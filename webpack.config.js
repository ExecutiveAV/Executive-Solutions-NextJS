const path = require('path');
const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    'encoding': path.join(__dirname, 'node_modules', 'encoding'),
  };

  config.resolve.fallback = {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
    process: require.resolve("process/browser"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    buffer: require.resolve("buffer"),
    asset: require.resolve("assert"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
    })
);




  return config;
};