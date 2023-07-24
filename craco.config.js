const path = require('path');

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@api': pathResolve('src/api'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@router': pathResolve('src/router'),
      '@store': pathResolve('src/store'),
      '@style': pathResolve('src/style'),
      '@utils': pathResolve('src/utils'),
    },
  },
};
