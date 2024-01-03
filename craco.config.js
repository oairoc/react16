const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
