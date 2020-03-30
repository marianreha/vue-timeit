import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.user(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
