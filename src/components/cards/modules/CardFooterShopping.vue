<template>
    <Grid :class="className" direction="horizontal" :column-num="2">
        <GridItem>
            <slot></slot>
        </GridItem>
        <GridItem>
            <cu-wave-button
                type = 'primary'
                size = 'small'
                round
                class = "button-motion"
            >立即购买</cu-wave-button>
        </GridItem>
    </Grid>
</template>

<script>
import { Grid, GridItem } from 'vant';
import { CuWaveButton } from '@/components/button';

export default {
    name: 'cu-card-footer-shopping',
    components: {
        Grid, 
        GridItem,
        'cu-wave-button': CuWaveButton
    },
    computed: {
        className(){
            return 'cu-card-footer-shopping';
        }
    }
}
</script>

<style scoped lang="less">
.cu-card-footer-shopping {
    & /deep/.van-grid-item__content {
        padding: 8px 8px;
    }
    & /deep/ .van-grid-item:nth-of-type(1) > .van-grid-item__content {
        border-radius: 0 0 0 8px;
         &::after {
            border-bottom: 0;
        }
    }
    & /deep/ .van-grid-item:nth-of-type(2) > .van-grid-item__content {
        border-radius: 0 0 8px 0;
        &::after {
            border-bottom: 0;
            border-right: 0;
        }
    }
    & .button-motion {
        animation: heartbeat 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
    }
}

@keyframes heartbeat {
    0% {
       transform: scale(1);
    }
    50% {
       transform: scale(1.122);
    }
    100% {
        transform: scale(1);
    }
}

</style>