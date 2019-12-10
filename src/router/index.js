import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to ===> 将要访问的路径
  // from ===> 代表从哪儿来
  // next ===> 表示放行
  //  next() 放行  next('/login') 强制跳转
  if (to.path === "/login") return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem("token")
  if (!tokenStr) return next("/login")
  next()
})

export default router
