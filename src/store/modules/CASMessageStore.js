import { cautionMessages } from "../../../public/cautionMessages";
import { warningMessages } from "../../../public/warningMessages";

export default {
  namespaced: true,
  state: {
    cautionMessages: "",
    warningMessages: "",
  },
  getters: {
    getCautionMessages(state) {
      return state.cautionMessages;
    },
    getWarningMessages(state) {
      return state.warningMessages;
    },
  },
  mutations: {
    SET_CAUTION_MESSAGES(state, payload) {
      state.cautionMessages = payload;
    },
    SET_WARNING_MESSAGES(state, payload) {
      state.warningMessages = payload;
    },
  },
  actions: {
    setCASMessages({ commit, state }) {
      commit("SET_CAUTION_MESSAGES", cautionMessages);
      commit("SET_WARNING_MESSAGES", warningMessages);
    },
  },
};
