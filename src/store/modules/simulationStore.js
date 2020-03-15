import { data } from "../../../public/pfd";

export default {
  namespaced: true,
  state: {
    pfdData: ""
  },
  getters: {
    getPfdData(state) {
      return state.pfdData;
    }
  },
  mutations: {
    SET_PFD_DATA(state, payload) {
      state.pfdData = payload;
    }
  },
  actions: {
    setPfdData({ commit }) {
      commit("SET_PFD_DATA", data);
    }
  }
};
