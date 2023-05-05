const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  transpilePackages: ['react-native-web', '@react-pdf/renderer'],
  
  experimental: {
    appDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'encoding': path.join(__dirname, 'node_modules', 'encoding'),
    };

    // Set the correct target environment for the client-side
    if (!isServer) {
      config.target = 'web';
    }

    // Fixes npm packages that depend on `fs` module
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
  }
}

module.exports = nextConfig