import { systemMessages } from "../../../public/systemMessages.js";

export default {
  namespaced: true,
  state: {
    systemMessages: ""
  },
  getters: {
    getSystemMessages: function(state) {
      return state.systemMessages;
    }
  },
  mutations: {
    SET_SYSTEM_MESSAGES(state, payload) {
      state.systemMessages = payload;
    }
  },
  actions: {
    setSystemMessages({ commit, state }) {
      commit("SET_SYSTEM_MESSAGES", systemMessages);
    }
  }
};
