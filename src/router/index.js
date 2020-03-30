import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import SearchPath from "../views/SearchPath.vue";
import BezelKeySim from "../views/BezelKeySim.vue";
import SimulationView from "../views/SimulationView.vue";
import viewpdf from "../views/viewpdf.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search
  },
  {
    path: "/SearchPath",
    name: "SearchPath",
    component: SearchPath
  },
  {
    path: "/bezelkeysim",
    name: "BezelKeySim",
    component: BezelKeySim
  },
  {
    path: "/simulationview",
    name: "SimulationView",
    component: SimulationView
  },
  {
    path: "/viewpdf",
    name: "viewpdf",
    component: viewpdf
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
