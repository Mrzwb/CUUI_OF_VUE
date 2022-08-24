import { CATALOG, COMPONENT_PRESET } from './util'
import CuCalendar from '@/components/calendar/index.vue';
import { Field } from 'vant';
import { action } from '@storybook/addon-actions';
import { DateMixin } from '@/components/mixins';

export default {
    title: CATALOG.FORM + 'Calendar',
    component: CuCalendar,
    argTypes: {
      show: { control: { type: 'boolean'} },
    },
    ...COMPONENT_PRESET({})
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CuCalendar , Field},
  template: `
    <div>
      <Field 
        readonly
        name="calendar"
        :value="date"
        label="日历"
        arrow-direction='left'
        placeholder="右边边选择日期"
        :style="{ border:'1px #e5e5e5 solid' }"
      />
      <cu-calendar v-model="shouldShow" @confirm="onConfirm" />
    </div>
  `,
  data() {
    return {
      date: '',
      shouldShow: false
    }
  },
  watch: {
    show: function(val) {
      this.shouldShow = val;
    }
  },
  methods: {
    onConfirm(date){
      this.shouldShow = false;
      this.date = this.formatDate(date,'-') 
      action(date).apply({});
    },
  },
  mixins: [DateMixin],
});
  
/*
 * 基础日历 
 */
export const Default = Template.bind({});

