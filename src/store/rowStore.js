import Vue from "vue";
import Vuex from "vuex";
import TopRow from "./rowModules/TopRowStore";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    TopRow
  }
});
