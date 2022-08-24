const { catalog } = require('./strories.config');
const { INITIAL_VIEWPORTS } = require('@storybook/addon-viewport');

interface Readme {
    content?: any,
    sidebar?: any
}

const getCatalog = (): any => {
    Object.keys(catalog).map( k => catalog[k] +="/");
    return catalog;
}

const presetComponentViewport = (): any => ({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6'
    },
});

// const presetComponentDoc = (): Object => ({
//     docs: {
//         source: {
//           type: 'auto'
//         },
//       }
// });

const presetReadme = (readme: Readme) => {
    if (readme.content == null && readme.sidebar == null) {
        return;
    }
    return {
        readme: {
            // Show readme before story
            content: readme.content,
            // Show readme at the addons panel
            sidebar: readme.sidebar,
          },
    }
};

// 导航目录
export const CATALOG = getCatalog();

// 组件预设
export const COMPONENT_PRESET: any = (readme: Readme) => ({
    parameters: {
        ...presetComponentViewport(),
        ...presetReadme(readme),
        //...presetComponentDoc()
    }
});

