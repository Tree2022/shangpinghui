//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);
import Home from '@/pages/Home/MyIndex';
import Search from '@/pages/Search/MyIndex';
import Login from '@/pages/Login/MyIndex';
import Register from '@/pages/Register/MyIndex';
let originPush = VueRouter.prototype.push;
let originPlace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originPlace.call(this, location, resolve, reject);
  } else {
    originPlace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true },
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },
    {
      path: '/search/:keyword?',
      component: Search,
      name: 'search',
      meta: { show: true },
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
});
