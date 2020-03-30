import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import User from './components/User';
import Home from './components/Home';


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user', component: User }
  ],
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
