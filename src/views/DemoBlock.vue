<template>
  <div class="cu-demo-block">
     <Row>
        <div class="title">{{ title }}</div>
        <div class="desc">{{ desc }}</div>
    </Row>
     <Row>
        <div class="demo">
          <slot/> 
        </div>
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Row, Col } from 'vant';

const DemoBlockProps = Vue.extend({
  props: {
    title: String,
    desc: String,
  }
})

@Component({
  name: 'cu-demo-block',
  components: {
    Row,
    Col,
  }
})
export default class DemoBlock extends DemoBlockProps {}
</script>

<style scoped lang="less">
.cu-demo-block {
    margin: 2px;
    & .title {
      margin: 5px;
      font-size: 16px;
      font-weight: 700;
    }

    & .desc {
       padding: 5px;
       margin: 5px;
       text-indent: 24px;
       font-size: 12px;
       color: #A7ADC0;
    }
    
    & .demo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      flex-wrap: wrap;
    }
}

</style>
