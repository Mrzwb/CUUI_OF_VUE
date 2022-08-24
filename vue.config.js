const IS_LIB_BUILD = () => {
  let hasLibFlag = process.argv.includes("build") 
    && process.argv.includes("--target") 
    && process.argv.includes("lib");
  return process.env.NODE_ENV === 'production' && hasLibFlag;
}

if (IS_LIB_BUILD()) {
  const Generator = require('vue-components-entry');
  const path = require('path');
  const DIR_COMPONENTS = path.join(__dirname, './src/components');
  const options = {
    outputPath : path.join(DIR_COMPONENTS, 'index.js'),
    pathResolver: (importPath) => `./${path.relative(DIR_COMPONENTS, importPath)}`,
    excludes: ['mixins']
  }
  Generator.genPackageEntry(options);
}

module.exports = {
    chainWebpack: config => {
      // webpack configuration
    },
    css: {
      extract: IS_LIB_BUILD() ? false : true,
      loaderOptions: {
        less: {
          // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          //lessOptions: {
            modifyVars: {
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "/src/components/styles/theme-vant.less";`,
            },
         //},
        },
      },
    },
};