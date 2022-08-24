<script>
import { Calendar } from 'vant'

export default {
    name: 'cu-calendar',
    extends: Calendar ,
}

</script>
<style lang="less" scoped>
/deep/ .van-calendar__day {
    border-radius: 50%;
}
/deep/ .van-calendar__selected-day {
    border-radius: 50%;
}
</style>