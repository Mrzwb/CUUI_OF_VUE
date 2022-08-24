<template>
  <component :is="tag" :class="className">
      <Collapse v-model="activeNames" @change="onChange">
        <CollapseItem name="1">
            <template #title>
                <div>下拉查看</div>
            </template>
            <slot></slot>
        </CollapseItem>
      </Collapse>
  </component>
</template>
<script>
import { Collapse, CollapseItem } from 'vant';

export default {
    name: 'cu-card-footer',
    components: {
        Collapse,
        CollapseItem
    },
    props: {
        tag: {
            type: String,
            default: 'div'
        },
    },
    data() {
        return {
            activeNames: [],
            isExpanded: false,
        };
     },
    computed: {
        className() {
            let rootClass = 'cu-card-footer '
            rootClass += this.isExpanded ? 'cu-card-footer--expanded' : 'cu-card-footer--collapsed';
            return rootClass;
        }
    },
    methods: {
        onChange() {
            this.isExpanded = !this.isExpanded;
        }
    },
}
</script>
<style scoped lang="less">
@import (reference) '../index.less';
.cu-card-footer {
    position: relative;
    width: 100%;
    height: @card-footer_height;
    background: @card-footer_background;
    border-top: @card-footer_border-top;

    & /deep/.van-cell  {
        font-size: @card-footer_font-size;
    }
    & /deep/.van-hairline--top-bottom::after {
        border: 0;
    }
    & /deep/ .van-icon {
        font-size: @card-footer_font-size-md;
    }
    &--expanded {
        /deep/.van-collapse-item__content {
            border-radius: @card-footer_border-radius;
        }
    }
    &--collapsed {
        /deep/.van-cell{
            border-radius: @card-footer_border-radius;
            transition: border-radius 0.3s ease-in-out
        }
    }
}

</style>