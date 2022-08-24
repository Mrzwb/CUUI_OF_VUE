<template>
    <div :class="className">
        <VanImage v-bind="$props" @click="onClick" v-waves/>
        <cu-card-body><slot></slot></cu-card-body>
    </div>
</template>
<script>
import CardBody from './modules/CardBody';
import waves from '../directives/waves';
import { Image as VanImage } from 'vant';

export default {
    name: 'cu-image-card',
    components: {
         VanImage,
        'cu-card-body': CardBody,
    },
    props: {
        ...VanImage.props,
        place: {
            type: String,
            default: 'top'    // top bottom left right
        },
        fit: {
            type: String,
            default: 'cover' 
        },
        width: {
            type: String,
            default: '100%'
        },
        radius: {
            type: String,
            default: ''
        }
    },
    computed: {
        className({place}) {
            const arrClass = ['cu-image-card'];
            switch(place) {
                case 'bottom':
                    arrClass.push('cu-image-card--bottom');
                    break;
                case 'left':
                    arrClass.push('cu-image-card--left');
                    break;
                case 'right':
                    arrClass.push('cu-image-card--right');
                    break;  
                default: 
                    arrClass.push('cu-image-card--top');
                    break;     
            }
            return arrClass.join(' ');
        }
    },
    methods: {
        onClick() {
            this.$emit('click', this.$options.propsData);
        }
    },
    directives: { waves }
}
</script>
<style lang="less" scoped>

.cu-image-card {
    display: flex;
    background: rgba(0,0,0,.088);
    padding: 6px;
    border-radius: 8px;
    &--top {
        flex-direction: column;
        /deep/.van-image {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }
    }
    &--bottom {
        flex-direction: column-reverse;
        /deep/.van-image {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
        }
    }
    &--left {
        flex-direction: row;
        /deep/.van-image {
            border-top-left-radius: inherit;
             border-bottom-left-radius: inherit;
        }
    }
    &--right {
        flex-direction: row-reverse;
        /deep/.van-image {
            border-top-right-radius: inherit;
             border-bottom-right-radius: inherit;
        }
    }

    & /deep/ .van-image {
        cursor: pointer;
    }
}

</style>