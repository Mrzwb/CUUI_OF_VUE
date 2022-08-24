<template>
    <Icon :class="className" :name="arrowName" :color="color" /> 
</template>
<script>
import Icon from './Icon.vue'

export default {
  name: 'cu-icon-arrow',
  components: { Icon },
  props: {
    direction: String,
    color: String,
    active: {
        type: Boolean,
        default: true
    }
  },
  computed: {
      className() {
          return this.active ? 'cu-icon-arrow_active' : null;
      },
      arrowName() {
          let iconName = 'arrow';
          switch(this.direction) {
              case 'left':
                  iconName = 'arrow-left';
                  break;
              case 'right':
                  break;
              case 'down':
                  iconName = 'arrow-down';
                  break;
              case 'up':
                  iconName = 'arrow-up';
                  break;
              default: 
        }
        return iconName;
    }
  },
};
</script>
<style scoped lang="less">
.cu-icon-arrow_active {
    margin-right: 4px;
    &:hover {
        & {
            opacity: .9;
        }
        &::after {     
            content: '';
            position: absolute;
            box-sizing: border-box;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            background:rgba(0, 0, 0, 0.128);
            border-radius: 50%;
            transform: scale(1.5);
            cursor: pointer;
        }
    }
}


</style>>
