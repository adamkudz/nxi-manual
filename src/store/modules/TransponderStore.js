export default {
  namespaced: true,
  state: {
    code: 1200,
    buttons: [
      { name: "XPDR 1", status: true, light: true, lit: true },
      { name: "XPDR 2", status: false, light: true, lit: false },
      { name: "Standby", status: false, light: true, lit: false },
      { name: "On", status: false, light: true, lit: false },
      { name: "ALT", status: true, light: true, lit: true },
      { name: "", status: false, light: false },
      { name: "VFR", status: true, light: false },
      { name: "Code", status: true, light: false },
      { name: "Ident", status: true, light: false },
      { name: "", status: false, light: false },
      { name: "Back", status: true, light: false },
      { name: "Alerts", status: true, light: false }
    ]
  },
  getters: {
    Xbuttons: state => {
      return state.buttons;
    }
  },
  mutations: {
    UPDATE_BUTTON: function(state, payload) {
      state.buttons[1].lit = payload;
    },
    SWITCH_TRANSPONDER: function(state, payload) {
      state.buttons[0].lit = false;
    }
  },

  actions: {
    updateButton: function({ commit }, payload) {
      commit("UPDATE_BUTTON", payload);
    }
  }
};
