import Vue from "vue";
import Vuex from "vuex";
import pfdStore from "./modules/pfdStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pfdStore
  }
});
