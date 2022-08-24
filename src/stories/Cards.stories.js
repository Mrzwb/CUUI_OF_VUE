import { CuCard, CuImageCard } from '@/components/cards'
import { CATALOG, COMPONENT_PRESET } from './util';
import DemoBlock from '@/views/DemoBlock';
import DemoSection from '@/views/DemoSection';
import DemoEmpty from '@/views/DemoEmpty';
import { action } from '@storybook/addon-actions';

import BgOne from './assets/bg001.png';
import BgTwo from './assets/bg002.png';
import Bg41 from './assets/bg41.jpg';
import Bg42 from './assets/bg42.jpg';

import { Uploader, Lazyload, Swipe, SwipeItem  } from 'vant';
import Vue from 'vue';

export default {
    title: CATALOG.SHOW + 'Card',
    components: { CuCard },
    ...COMPONENT_PRESET({}),
}

/*
 * 基础卡片
 */
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CuCard },
    template: '<cu-card v-bind="$props" @click="onClick">{{$props.label}}</cu-card>',
    methods: {
      onClick: action('clicked')
    }
});

export const BaseCard = Template.bind({});
BaseCard.args = {
  title: '选商品',
  color: 'linear-gradient(to right, rgb(57 35 2), #cf1322)',
  textColor: '#fff',
 //image: BgOne,
  icon: 'point-gift',
  iconColor: 'yellow',
  radius: '8px 0',
  arrow: 'right',
  arrowColor: '#eee',
  extra: '更多'
};


/**
 * 图形卡片
 * @returns 
 */
 const ImgCardTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CuImageCard,DemoEmpty },
  template: `<div>
    <cu-image-card v-bind="$props" lazy-load @click="onClick">
        <div style="font-size: 14px; padding: 6px">
            尼罗河
            This pattern allows you to use base components more like raw HTML elements,
            without having to care about which element is actually at its root:
        </div>
    </cu-image-card>
    <DemoEmpty/>
    <cu-image-card @click="onClick" src=${Bg42} height='200px'>
        <div style="font-size: 14px; padding: 6px">
            阿尔卑斯山脉
            This pattern allows you to use base components more like raw HTML elements,
            without having to care about which element is actually at its root:
        </div>
    </cu-image-card>
  </div>`,
  methods: {
    onClick: action('点击了图片')
   
  }
});

export const ImageCard = ImgCardTemplate.bind({});
ImageCard.args = {
  place: '',
  radius: '',
  width: '100%',
  height: '100%',
  fit: 'cover',
  src: Bg41
}


/*
 * 自定义
 */
Vue.use(Uploader);
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Swipe);
Vue.use(SwipeItem);
export const CustomCard = () => ({
  components: { 
    CuCard, 
    DemoBlock,  
    DemoSection, 
    DemoEmpty, 
    Uploader, 
  },
  data(){
    return {
        fileList: [
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          { url: 'https://img01.yzcdn.cn/vant/sand.jpg' },
          { url: 'https://img01.yzcdn.cn/vant/tree.jpg'},
        ],
        imageList: [
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
          'https://img01.yzcdn.cn/vant/apple-3.jpg',
        ],
        images: [
          'https://img01.yzcdn.cn/vant/apple-1.jpg',
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
          'https://img01.yzcdn.cn/vant/apple-3.jpg',
          'https://img01.yzcdn.cn/vant/apple-4.jpg',
        ],
    }
  },
  template: `
    <DemoSection>
        <DemoBlock title="卡片-背景图表头">
            <cu-card 
                title = '买手机' 
                image = ${BgTwo}
                textColor = '#fff'
                icon =  'point-gift'
                iconColor = 'red'
                arrow = 'right'
                extra = '全部'
                arrowColor = '#eee'
                ></cu-card>
            <DemoEmpty/>
            <cu-card 
                title = '畅爽天猫销商品' 
                image = ${BgOne}
                textColor = '#000'
                icon = 'cart'
                iconColor = 'red'
                arrow = 'right'
                arrowColor = '#eee'
                radius = '8px 8px 0 0'>

                <div style="padding: 6px;">
                  <van-uploader v-model="fileList" multiple  />
                </div>
            </cu-card>
        </DemoBlock>
        <DemoBlock title="卡片-页脚">·
            <cu-card 
              title = '畅听王卡' 
              color = 'linear-gradient(to left, #d4380d, #fa8c16)'
              textColor = '#fff'
              icon = 'gem'
              iconColor = '#fff'
              radius = '8px 8px 0 0'
              footer = 'CardFooterShopping'
            >
                <van-swipe :autoplay="3000" >
                  <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" style="height:150px;line-height: 150px;width:96%;margin:2%"/>
                  </van-swipe-item>
                </van-swipe>
                <template #footer>
                    <div style="font-size:12px;color:#d4380d"> 本月已热销 <span style="font-size:14px;font-weight:600">100</span> 台</div>
                </template>
            </cu-card>
        </DemoBlock>
        <DemoBlock title="卡片-图片懒加载页脚">
            <cu-card 
                title = '剩余话费' 
                color = '#fff'
                textColor = '#000'
                icon = 'fire-o'
                iconColor = 'red'
                arrow = 'right'
                arrowColor = '#ddd'
                radius = '8px 8px 0 0'
                footer = 'CardFooter'
              >
                <div style="border-top:1px #eee solid;padding: 6px; display: flex">
                  <van-uploader v-model="fileList" multiple  />
                </div>
                <template #footer>
                    <lazy-component>
                        <img style="width:100%;background-size:cover; padding-top: 8px" v-for="img in imageList" v-lazy="img"  />
                    </lazy-component>
                </template>
            </cu-card>
      </DemoBlock>
    </DemoSection>
`
});

CustomCard.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: 'rgba(0,0,0,0.87)' },
      { name: 'light', value: '#f5f5f5' },
    ],
  },
};
