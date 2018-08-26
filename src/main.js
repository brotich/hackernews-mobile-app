import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import App from './App.vue';


Vue.use(VueOnsen);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data() {
    return {
      title: 'My app'
    };
  },
}).$mount('#app');
