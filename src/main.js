import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/base.css'
import moment from 'moment/moment'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString); // value可以是普通日期 20170723
  // return moment.unix(value).format(formatString); // 这是时间戳转时间
});

Vue.filter('formatDuration', dt => {
  // 转分
  let min = Math.ceil(dt / 1000 / 60)
  min = min < 10 ? '0' + min : min
  // 秒
  let sec = Math.ceil((dt / 1000) % 60)
  sec = sec < 10 ? '0' + sec : sec
  return min + ':' + sec
})

Vue.filter('formatCount', count => {
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万'
  } else {
    return count
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
