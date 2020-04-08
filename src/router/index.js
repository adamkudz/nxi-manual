import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import PathfinderView from "../views/PathfinderView";
import Path2 from "../views/Path2.vue";
import SimulationView from "../views/SimulationView.vue";
import viewpdf from "../views/viewpdf.vue";
import CasMessagesView from "../views/CasMessagesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pathfinder",
    name: "PathfinderView",
    component: PathfinderView,
  },

  {
    path: "/path2",
    name: "Path2",
    component: Path2,
  },

  {
    path: "/simulationview",
    name: "SimulationView",
    component: SimulationView,
  },
  {
    path: "/viewpdf",
    name: "viewpdf",
    component: viewpdf,
  },
  {
    path: "/casmessages",
    name: "CasMessagesView",
    component: CasMessagesView,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
