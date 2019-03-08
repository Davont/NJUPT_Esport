// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto'; //引用roboto字体
import Toast from 'muse-ui-toast'; //引用短消息插件
import 'muse-ui-message/dist/muse-ui-message.css'; //消息插件
import Message from 'muse-ui-message';
import Axios from 'axios'; //引入axios
import qs from 'qs';
Vue.prototype.$axios = Axios //修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Axios.defaults.headers.get['Content-Type'] = 'application/json'; //跨域请求

Vue.use(Message);

Vue.use(Toast);
Vue.use(MuseUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  methods: {
    toast() {
      this.$toast.message('hello world');
      this.$toast.success('hello world');
      this.$toast.info('hello world');
      this.$toast.warning('hello world');
      this.$toast.error('hello world');
    }
  }
})
