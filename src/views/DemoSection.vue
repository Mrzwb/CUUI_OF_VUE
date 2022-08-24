<template>
    <div class="cu-demo-section">
        <slot/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'cu-demo-section',
})
export default class DemoBlock extends Vue {}

</script>

<style scoped lang="less">
.cu-demo-section  {
    & > div:not(:first-child) {
        margin: 20px 2px;
        border-top: 1px solid #e5e5e5;
    }
}
</style>