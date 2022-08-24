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
    template: '<cu-button @onClick="onClick" v-bind="$props" >{{$props.label}}</cu-button>',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    type: 'primary',
    label: '京西商券',
  };