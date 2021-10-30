import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
