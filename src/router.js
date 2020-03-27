import Vue from "vue";
import Router from "vue-router";
import InProgress from "./views/InProgress.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue")
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
      component: () => import("./views/Team.vue")
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
