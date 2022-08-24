<template>
    <div :class = "className">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'cu-demo-empty',
})
export default class DemoBlock extends Vue {
    @Prop() numbers: number | undefined;

    get className() {
        return 'cu-demo-empty';
    }
}
</script>
<style scoped lang="less">
.cu-demo-empty  {
    width: 100%;
    height: 15px;
}

</style>