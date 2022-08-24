<template>
  <component :is="tag" :class="className" :style="sytleObj">
      <img :src= "image" v-if="isDef(this.image)"/>
      <div>
          <cu-icon :name='icon' :color='iconColor'/>  
          <span> {{ title }} </span>
      </div>
      <div v-if="isDef(this.arrowDirection)" @click="onClick">
          <span> {{ extra }} </span>
          <cu-icon-arrow :direction='arrowDirection' :color='arrowColor'/> 
      </div>
  </component>
</template>

<script>
import { CommonMixin } from '../../mixins';
import { CuIcon , CuIconArrow } from '../../icon/index.js'
export default {
    name: 'cu-card-header',
    components: { 
        'cu-icon': CuIcon,
        'cu-icon-arrow': CuIconArrow
    },
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        title: {
            type: String,
            default: ''
        },
        image: {
            type: [Object, String],
            default: null
        },
        icon: String,
        iconColor: String,
        color: String,
        textColor: String,
        radius: String,
        arrowDirection: String,
        arrowColor: String,
        extra: String,
        click: Function,
    },
    computed: {
        className() {
            let className = 'cu-card-header';
            return this.image ? className + ' cu-card-header__img': className;
        },
        sytleObj() {
            let styleObj = this.radius ? {borderRadius: this.radius } : {};
            return Object.assign(styleObj, {
                background: this.color ? this.color : 'white',
                color: this.textColor ? this.textColor : 'black',
            });
        },
    },
    methods: {
        onClick() {
            this.$emit("click");
        }
    },
    mixins: [CommonMixin],
}

</script>
<style scoped lang="less">
@import (reference) '../index.less';

@limit-height:  @card-header_max-height;

.cu-card-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: @limit-height;
    padding: @card-header_padding;
    font-size: @card-header_font-size;

    img {
        min-height: @limit-height;
        user-select: none;
        -webkit-user-drag: none;
    }

    i {
        vertical-align: text-top
    }

    div {
        padding: 4px 0;
        flex: 1;
        &:nth-of-type(1) {
            font-weight: @card-header_font-weight;
        };
        &:nth-of-type(2) {
            margin-right: @card-header_margin-right;
            text-align: right;
            & > span {
                opacity: .618;
                font-size: @card-header__extra-font-size;
                padding-right: @padding-base;
            }
        }
        .cu_ellipsis();
    }
    
    &__img {
        padding: 0;
        & > img {
            width: 100%;
            height: 100%;
            background-size: cover;
        }
        & > div {
            position: absolute;
            top: 0;
            line-height: @limit-height;
            padding: 0;
            width: 50%;
            &:nth-of-type(1) {
                left: 0;
                padding-left: @padding-md;
            }
            &:nth-of-type(2) {
                 right: 0;
                 padding-right: @padding-md;
            }
        }
        .cu_ellipsis();
    }
}
</style>