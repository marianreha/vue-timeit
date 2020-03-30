import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from './components/Login';
import Home from './components/Home';


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home }
  ],
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
