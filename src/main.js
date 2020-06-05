import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";
import VModal from "vue-js-modal";
import "@/assets/bootstrap-grid.css";
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueFire);
firebase.initializeApp({
  projectId: "dscadmu",
  databaseURL: "https://dscadmu.firebaseio.com"
});

Vue.config.productionTip = false;
Vue.use(VueDragscroll);
Vue.use(VModal);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

export const db = firebase.firestore();
