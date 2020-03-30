import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import User from './components/User';
import Home from './components/Home';
import EnterHours from './components/pages/EnterHours';
import EnterOoo from './components/pages/EnterOoo';
import ViewReport from './components/pages/ViewReport';


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user', component: User },
    { path: '/enterwh', component: User },
    { path: '/user', component: User },
    { path: '/user', component: User },
  ],
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
