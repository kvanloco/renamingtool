import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Namingtool from "./views/Namingtool";
import Documentlist from "./views/Documentlist";
import Settings from "./views/Settings";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/namingtool",
    name: "Namingtool",
    component: Namingtool
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("./views/Settings.vue")
  },
  {
    path: "/documentlist",
    name: "Documentlist",
    component: () => import("./views/Documentlist.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
