import Vue from "vue";
import Vuex from "vuex";
import pfdStore from "./modules/pfdStore";
import systemMessagesStore from "./modules/systemMessagesStore";
import CASMessageStore from "./modules/CASMessageStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pfdStore,
    systemMessagesStore,
    CASMessageStore
  }
});
