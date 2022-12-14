import { create } from '@storybook/theming';
import appLogo from '../src/stories/assets/logo.png'
import { themes } from '@storybook/theming';

export default create({
    //base: 'light'|'dark',
  
    //colorPrimary: 'hotpink',
    //colorSecondary: 'deepskyblue',
  
    // UI
    //appBg: 'white',
    //appContentBg: 'silver',
    //appBorderColor: 'grey',
    //appBorderRadius: 4,
  
    // Typography
    // fontBase: '"Open Sans", sans-serif',
    // fontCode: 'monospace',
  
    // Text colors
     //textColor: 'black',
     //textInverseColor: 'rgba(255,255,255,0.9)',
  
    // Toolbar default and active colors
     barTextColor: 'silver',
     barSelectedColor: 'black',
    // barBg: 'hotpink',

    // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: 'black',
    // inputBorderRadius: 4,
  
    brandUrl: '',
    brandImage: appLogo,
    brandTitle: 'cu-components',
  });