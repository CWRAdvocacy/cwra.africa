const withPlugins = require('next-compose-plugins');
const reactSvg = require('next-react-svg');
const path = require('path')

module.exports = withPlugins([
  [reactSvg, {
    include: path.resolve(__dirname, 'src/assets/svg'),
    webpack(config, options) {
      return config
    }
  }],
]);
