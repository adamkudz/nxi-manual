import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import SearchPath from "../views/SearchPath.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
