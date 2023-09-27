import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import defaultRoleData from './defaultRole.json'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    // 全局事件总线,公交车
    Vue.prototype.$bus = this

  },
  mounted() {
      // 判断是否有默认列表,没有就创建
      if (!localStorage.getItem("defaultRole")) {
           console.log("没有");
           console.log(defaultRoleData);
           localStorage.setItem("defaultRole", JSON.stringify(defaultRoleData));
      } else{
        console.log("有");
      }
    },
}).$mount('#app')
