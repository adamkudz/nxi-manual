export default {
  namespaced: true,
  state: {
    bezelKeys: [
      "",
      "MAP/HSI",
      "TFC Map",
      "PFD Opt",
      "OBS",
      "CDI",
      "DME",
      "XPDR",
      "Ident",
      "Tmr/Ref",
      "Nearest",
      "Alerts"
    ],
    currentKey: "Top"
  },
  getters: {
    getBezelKeys: state => {
      return state.bezelKeys;
    }
  },
  mutations: {
    SET_KEY_DATA(state, payload) {
      state.keys = payload;
    },

    SET_CURRENT_KEY(state, payload) {
      state.currentKey = payload;
    }
  },
  actions: {}
};
