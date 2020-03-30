import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.user(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: App }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
