import Vue from "vue";
import Vuex from "vuex";
import TransponderStore from "../store/modules/TransponderStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    TransponderStore
  }
});
