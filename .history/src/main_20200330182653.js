import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login'

Vue.user(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Login }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
