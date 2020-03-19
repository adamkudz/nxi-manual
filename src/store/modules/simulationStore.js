import { data } from "../../../public/pfd";

export default {
  namespaced: true,
  state: {
    pfdData: "",
    selectedKey: "Top"
  },
  getters: {
    getPfdData: state => {
      return state.pfdData;
    },
    getSelectedKey: state => {
      return state.selectedKey;
    }
  },
  mutations: {
    SET_PFD_DATA(state, payload) {
      state.pfdData = payload;
    },
    SET_SELECTED_KEY(state, payload) {
      state.selectedKey = payload;
    }
  },

  actions: {
    setPfdData({ commit }) {
      commit("SET_PFD_DATA", data);
    },
    setSelectedKey({ commit }) {
      commit("SET_SELECTED_KEY", payload);
    }
  }
};
