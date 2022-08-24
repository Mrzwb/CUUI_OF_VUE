const path = require('path');
const cua = require('./cua-webpack.config');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-readme"
  ],
  webpackFinal: async (config, { configType }) => {
    const rulus = cua.module.rules;
    rulus.forEach(rule => {
      config.module.rules.push(rule);
    });
    config.resolve.alias = {...config.resolve.alias, ...cua.resolve.alias};
    return config;
  },
}


