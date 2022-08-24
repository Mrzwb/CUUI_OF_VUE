module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-pxtorem': {
            rootValue: 16,        // 设计稿375为标准
            unitPrecision: 5,     // 保留rem精度
            propList: ['*'],
            selectorBlackList: [  // 忽略转换,可以正则
                ".ig-"
            ],
            minPixelValue: 1,
            replace: true,        // 是否转换后直接更换属性值
            mediaQuery: false,    // 是否在媒体查询也进行转换
            exclude: /node_modules/i
        }
    },
};

