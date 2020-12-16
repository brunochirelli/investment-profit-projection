const { useBabelRc, override } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());

module.exports = (config) => {
  config.plugins = config.plugins.filter(
    (plugin) => !(plugin.options && plugin.options.eslintPath)
  );
  return config;
};
