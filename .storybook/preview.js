import { CATALOG } from '../src/stories/util';
import { addDecorator } from '@storybook/vue';
import { addReadme, configureReadme } from 'storybook-readme/vue';
addDecorator(addReadme);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //layout: 'centered',
  options: {
    storySort: (a, b) => {
      const values = Object.values(CATALOG);
      let catalogOne = a[1].kind.match(/([^/]*)\//g)[0];
      let catalogTwo = b[1].kind.match(/([^/]*)\//g)[0];
      return values.indexOf(catalogOne) - values.indexOf(catalogTwo);
    }
  },
}




