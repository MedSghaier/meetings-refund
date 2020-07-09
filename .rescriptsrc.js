module.exports = config => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  },
  config.devtool= 'eval';
  config.output.filename = 'static/js/[name].js';
  config.output.chunkFilename = 'static/js/[name].chunk.js';
  
  return config;
};