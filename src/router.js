import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "./views/Home.vue";
import InProgress from "./views/InProgress.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: InProgress
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/events",
      component: InProgress
      // component: () => import("./views/Events.vue")
    },
    {
      path: "/projects",
      component: InProgress
      // component: () => import("./views/Projects.vue")
    },
    {
      path: "/team",
      component: InProgress
      // component: () => import("./views/Team.vue")
    }
  ]
});
