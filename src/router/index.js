import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue';
import Users from '../components/user/Users.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 路由重定向自动访问login
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    // 访问到home时，重定向到welcome
    redirect: '/welcome',
    // // 设置子路由
    children: [
      {
        path: '/welcome',
        component: Welcome,
      },
      {
        path: '/users',
        component: Users,
      }


    ],

  }

]

const router = new VueRouter({
  routes
})



// 路由导航守卫
// to将要访问的路径
// from代表从哪个路径跳转而来
// next表示放行
// next()放行
// next('/login')强制跳转
/*添加路由对象*/
router.beforeEach((to, from, next) => {
  // 如果用户访问登录页直接放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有token强制跳转登录页
  if (!tokenStr) return next('/login')
  next()
})




export default router
