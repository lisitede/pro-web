const fs = require('fs');


module.exports = appInfo => {
  const config = {};

  config.keys = 'default-dev-key';

  config.security = {
    csrf: false,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return config;
};
