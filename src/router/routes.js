const routes = [
  {
    path: "/",
    name: "login",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home.vue")
  }
]

export default routes
