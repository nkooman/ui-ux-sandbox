const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // prependData: '@import "~@/styles/index.prepend";'
      }
    }
  }
};
