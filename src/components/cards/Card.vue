<template>
    <div class ="cu-card">
        <cu-card-header v-if="shouldShowHeader" 
            :title = "title" 
            :color = "color" 
            :textColor = "textColor" 
            :image = "image"
            :icon = "icon"
            :iconColor = "iconColor"
            :radius = "radius"
            :arrowDirection = "arrow"
            :arrowColor = "arrowColor"
            :extra = "extra"
            @click = "onClick"
            />
        <cu-card-body>
            <slot></slot>
        </cu-card-body>
        <component :is = "dynamicComponent" v-if="shouldShowFooter">
            <slot name = "footer"></slot>
        </component>
    </div>
</template>

<script>
import CardHeader from './modules/CardHeader';
import CardBody from './modules/CardBody';

export default {
    name: 'cu-card',
    components: {
        'cu-card-header': CardHeader,
        'cu-card-body': CardBody,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        color: String,
        icon: String,
        iconColor: String,
        image: String,
        textColor: String,
        radius: String,
        arrow: String,
        arrowColor: String,
        extra: String,
        footer: String
    },
    computed: {
        shouldShowHeader() {
            return this.title.length != 0;
        },
        shouldShowFooter() {
            return !!this.footer;
        },
        dynamicComponent() {
            return () => import(`./modules/${this.footer}`);
        }
    },
    methods: {
        onClick: function() {
            this.$emit('click');
        }
    },
}

</script>
<style lang="less" scoped>
@import './index.less';
.cu-card {
    position: relative;
    width: 100%;
    height: 100%;
}


</style>