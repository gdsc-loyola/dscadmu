import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";
import "@/assets/bootstrap-grid.css";

Vue.config.productionTip = false;
Vue.use(VueDragscroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
