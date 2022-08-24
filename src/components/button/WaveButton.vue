<template>
    <component :is="tag" v-bind="$props" :class="computedClass" @click="handleClick">
        <slot/>
    </component>
</template>

<script>
import { Button } from 'vant';
import waves from '@/components/mixins/waves'

export default {
    name: 'cu-wave-button',
    components: { 
        'van-button': Button 
    },
    props: {
        ...Button.props,
        tag: {
            type: String,
            default: 'van-button'
        },
    },
    methods: {
        handleClick(e) {
            this.wave(e);
            this.$emit('click', this);
        }
    },
    computed: {
        computedClass() {
            return [this.waves && 'ripple-parent', 'cu-wave-button'];
        }
    },
    mixins: [waves],
}
</script>
<style lang="less" scoped>

@import '../styles/var.less';
@btn-transition : @transition-basic;

.cu-wave-button {
     box-shadow: @z-depth-1;
     transition: @btn-transition;
}
</style>