import { data } from "../../../public/pfd";
export default {
  namespaced: true,
  state: {
    pfdData: "",
    selected: "",
    ancestors: "",
    selectionArray: [],
    highlightArray: []
  },
  getters: {
    getPfdData: state => {
      return state.pfdData;
    },
    getAncestors: state => {
      return state.ancestors;
    },
    getLabels: state => {
      if (state.selected) return state.selected.labels;
    },
    getSelected: state => {
      return state.selected;
    },
    getSelectionArray: state => {
      return state.selectionArray;
    },
    getHighlightArray: state => {
      return state.highlightArray;
    }
  },
  mutations: {
    SET_PFD_DATA: (state, payload) => {
      state.pfdData = payload;
    },
    SET_SELECTED: (state, payload) => {
      state.selected = payload;
    },
    SET_ANCESTORS: (state, payload) => {
      state.ancestors = payload;
    },
    SET_SELECTION_ARRAY: (state, payload) => {
      state.selectionArray = payload;
    },
    SET_HIGHLIGHT_ARRAY: (state, payload) => {
      state.highlightArray = payload;
    },
    CLEAR_STORE_DATA: state => {
      state.pfdData = "";
      state.selected = "";
      state.ancestors = "";
      state.selectionArray = [];
    }
  },
  actions: {
    setPfdData: async function({ commit }, { self }) {
      try {
        await commit("SET_PFD_DATA", data);
        self.setPfdData();
      } catch (err) {
        console.log(err);
      }
    },

    setSelected: async function({ commit, state }, payload) {
      try {
        let selected = state.pfdData.find(data => data.id == payload);
        let top = state.pfdData.find(data => data.buttonName == "Top");
        let ancestors = selected.ancestors;
        const lvlArray = [];
        const highlightArray = [];
        const lvl1 = state.pfdData.find(
          data => data.buttonName == ancestors[0]
        );
        const lvl2 = state.pfdData.find(
          data => data.buttonName == ancestors[1]
        );
        const lvl3 = state.pfdData.find(
          data => data.buttonName == ancestors[2]
        );
        const lvl4 = state.pfdData.find(
          data => data.buttonName == ancestors[3]
        );

        lvlArray.push(lvl1, lvl2, lvl3, lvl4, selected);
        const newArray = lvlArray.filter(x => {
          return x !== undefined;
        });

        newArray.forEach(x => {
          if (x.buttonName !== "Top") {
            highlightArray.push(x.buttonName);
          }
        });
        commit("SET_HIGHLIGHT_ARRAY", highlightArray);
        commit("SET_SELECTION_ARRAY", newArray);
        commit("SET_ANCESTORS", ancestors);
        commit("SET_SELECTED", selected);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
