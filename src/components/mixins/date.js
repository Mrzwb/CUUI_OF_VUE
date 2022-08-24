
/**
 * 混入 - 日期
 * 
 * @author zhouwb 2021-04-25
 * @type {{}}
 */
 export default {
    computed: {
        currentDate: function () {
            return this.formatDate(new Date());
        },

        currentTime: function () {
            return this.formatTime(new Date());
        },
    },
    methods: {
        formatDate: function(date, separator) {
            separator = separator ? separator : '-';
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = month.toString().replace(/^([1-9])$/,'0$1');
            day =  day.toString().replace(/^([1-9])$/,'0$1');
            return year+ separator+ month + separator + day;
        },

        formatTime: function(date) {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            return hours + ':' + minutes + ':' + seconds;
        }
    },
}