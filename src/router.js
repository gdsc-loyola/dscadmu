import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/team",
      component: () => import("./views/Team.vue")
    }
  ]
});
