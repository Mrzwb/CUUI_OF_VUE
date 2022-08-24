<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <cu-button type='primary'  > 主要按钮 </cu-button>

   <p/>
    <CuWaveButton type='primary' > 水波按钮 </CuWaveButton>

    <p/>
     <p/> <p/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './HelloWorld.vue' // @ is an alias to /src
import { CuButton, CuWaveButton } from '@/components/button'

@Component({
  components: {
    HelloWorld,
    CuButton,
    CuWaveButton
  }
})
export default class Home extends Vue {}
</script>
