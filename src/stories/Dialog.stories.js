import { CATALOG } from './util'
import { CuButton }  from '@/components/button'
import { action } from '@storybook/addon-actions';

export default {
    title: CATALOG.FEEDBACK + 'Dialog',
    component: CuButton,
    argTypes: {
      backgroundColor: { control: 'color' },
      size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CuButton },
    template: '<div><h3>Define some here</h3><cu-button v-bind="$props" @click="onClick">{{$props.label}}</cu-button></div>',
    methods: {
      onClick: action('clicked')
    }
});
  
export const Dialog = Template.bind({});
Dialog.args = {
    type: 'warning',
    label: 'Button',
};