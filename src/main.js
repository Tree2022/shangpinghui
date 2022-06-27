import Vue from 'vue';
import App from './App.vue';
//三级组件---全局组件
import TypeNav from './components/TypeNav/TypeNav.vue';
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from './router/index';
//引入仓库
import store from './store/index';

// import vueConfig from 'vue.config';
// Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route , $router属性
  router,
  store,
}).$mount('#app');
