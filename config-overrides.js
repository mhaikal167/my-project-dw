const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Assets': 'src/assets',
    '@Components': 'src/components',
    '@Views': 'src/views',
    '@Utils' : 'src/utils',
  })(config);
  return config;
};
