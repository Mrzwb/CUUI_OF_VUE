const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const plugins = [
  [
    "import",
    { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
  ],
  [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: name => `${name}/style/less`
    },
    "vant"
  ],
  [
    "component",
    {
      libraryName: "cuui_of_vue",
      libDir: "components",
    }
  ]
];

if (IS_PROD) {
  plugins.push([
    "transform-remove-console",
    { exclude: ["error", "warn", "time", "timeEnd"] }
  ]);
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins
};