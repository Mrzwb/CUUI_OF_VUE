import { CATALOG } from './util'
import { CuButton } from '../components/button';

export default {
    title: CATALOG.BUSINESS + '会员充值',
    component: CuButton,
    argTypes: {
      backgroundColor: { control: 'color' },
      size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CuButton },
    template: '<my-button @onClick="onClick" v-bind="$props" />',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Button',
  };