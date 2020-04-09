import Vue from "vue";
import Vuex from "vuex";
import pfdStore from "./modules/pfdStore";
import SystemMessagesStore from "./modules/SystemMessagesStore";
import CASMessageStore from "./modules/CASMessageStore";
import simulationStore from "./modules/simulationStore";
import TransponderStore from "../store/modules/TransponderStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pfdStore,
    SystemMessagesStore,
    CASMessageStore,
    simulationStore,
    TransponderStore
  }
});
