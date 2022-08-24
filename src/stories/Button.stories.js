import { CuButton , CuWaveButton }  from '@/components/button';
import readmeDoc from './md/button/button-base.md';
import { CATALOG, COMPONENT_PRESET } from './util';
import DemoBlock from '@/views/DemoBlock';
import DemoSection from '@/views/DemoSection';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: CATALOG.BASE + 'Button',
  components: {CuButton, CuWaveButton},
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['mini', 'small', 'normal', 'large'] } },
    type: { control: { type: 'inline-radio', options: ['default','primary', 'info', 'warning', 'danger']}}, 
    plain: { control: { type: 'boolean'}},
    hairline: { control: { type: 'boolean'}},
    disabled: { control: { type: 'boolean'}},
    loading: { control: { type: 'boolean'}},
    square:  { control: { type: 'boolean'}},
    round: { control: { type: 'boolean'}},
  },
  ...COMPONENT_PRESET({sidebar: readmeDoc}),
}

/*
 * 基础按钮
 */
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CuButton },
  template: '<cu-button v-bind="$props" @click="onClick">{{$props.label}}</cu-button>',
  methods: {
    onClick: action('clicked')
  }
});

export const BaseButton = Template.bind({});
BaseButton.args = {
   type: 'primary',
   label: '基础按钮',
};

BaseButton.parameters = {
  docs: {
    description: {
        component: '基础按钮用法', // some component _markdown_
    },
    source: {
      code: `<cu-button type='primary' size='normal'><cu-button>`,
    },
  },
};

/*
 * 水波纹按钮按钮
 */
const WaveButtonTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CuWaveButton },
  template: '<cu-wave-button v-bind="$props" @click="onClick">{{$props.label}}</cu-wave-button>',
  methods: {
    onClick: action('clicked')
  }
});
export const WaveButton = WaveButtonTemplate.bind({});
WaveButton.args = {
  type: 'primary',
  label: '水波按钮',
};

/*
 * 自定义按钮
 */
export const CustomButton = () => ({
  components: { CuButton, DemoBlock, DemoSection },
  template: `
    <DemoSection>
        <DemoBlock title="图标按钮" :desc="desc1()">
          <cu-button icon="plus" type="primary" @click="onClick"/>
          <cu-button icon="plus" type="primary" @click="onClick">按钮</cu-button>
          <cu-button icon="plus" type="primary">按钮</cu-button>
          <cu-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info" plain>
              按钮
          </cu-button>
        </DemoBlock>
        <DemoBlock title="自定义按钮" :desc="desc2()">
          <cu-button color="#7232dd" @click="onClick">单色按钮</cu-button>
          <cu-button color="#7232dd" plain @click="onClick">单色按钮</cu-button>
          <cu-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="onClick">
            渐变色按钮
          </cu-button>
        </DemoBlock>
        <DemoBlock title="加载按钮" :desc="desc3()">
          <cu-button loading type="primary" />
          <cu-button loading type="primary" loading-type="spinner" />
          <cu-button loading type="info" loading-text="加载中..." />
        </DemoBlock>
        <DemoBlock title="按钮形状">
          <cu-button square type="primary" @click="onClick">方形按钮</cu-button>
          <cu-button round type="info" @click="onClick">圆形按钮</cu-button>
        </DemoBlock>
      </DemoSection>
  `,
  methods: {
    onClick(event) {
       let name = event.target.textContent;
       action(name).apply(this);
    },
    desc1() {
      return '通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。';
    },
    desc2() {
      return '通过 color 属性可以自定义按钮的颜色。';
    },
    desc3() {
      return '通过 loading 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 loading-text 设置加载状态下的文字。'
    }
  }
});