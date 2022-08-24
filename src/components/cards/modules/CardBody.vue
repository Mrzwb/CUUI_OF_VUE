<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'cu-card-body',
})
export default class CardBody extends Vue {
    tag: string = 'div';
    get className() {
        return 'cu-card-body'
    }
}
</script>

<style scoped lang = "less">
@import (reference)  '../index.less';
.cu-card-body {
  position: relative;
  width: 100%;
  font-size: @card-body_font-size;
  background: @card-body_background;
}


</style>
