const path = require('path');
const POSTCSS_CONFIG_FILE = path.join(__dirname, '../postcss.config.js');
const CACHE_DIR = path.join(__dirname, 'node_modules/.cache');

const CSS_LOADERS = [
    'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            config: {
                path: POSTCSS_CONFIG_FILE,
            },
        },
    },
];

// const CACHE_LOADER = {
//     loader: 'cache-loader',
//     options: {
//         cacheDirectory: CACHE_DIR,
//     },
// };

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                sideEffects: true,
                use: [...CSS_LOADERS, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false,
                        modifyVars: {
                          hack: 'true; @import "/src/components/styles/theme-vant.less";'
                        }
                    }
                }],
            },{
                test: /\.s[ac]ss$/,
                sideEffects: true,
                use: [
                    ...CSS_LOADERS,
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
      ]
    },
}