<template>
  <div class="BEZELKEYSIMCONTAINER">
    <header>
      <h2>Bezel Key Simulation</h2>
    </header>
    <div class="simContainer">
      <div id="pfdMapWindow">
        <PfdInsetMapDisplay :imageClass="pfdMapWindow" />
      </div>

      <div id="hsiDisplay">
        <PfdHsiDisplay2 />
      </div>
      <div id="pfdBezelRow">
        <keep-alive>
          <component
            :is="rowType"
            :selectedKey="selectedKey"
            :ancestor="ancestor"
            :pfdData="pfdData"
            @searchForKey="searchForKey"
            @goBackOneLevel="goBackOneLevel"
          />
        </keep-alive>
      </div>

      <div id="pfdWindData">
        <pfdWindDataDisplay :imageClass="pfdWindData" />
      </div>
      <div id="dmeInfoWindow">
        <DmeInfoWindow v-if="dmeInfoWindow" :imageClass="dmeInfoWindow" />
      </div>
      <div id="pfdTransponder"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import PfdInsetMapDisplay from "../components/PFDComponents/PfdInsetMapDisplay";
import PfdWindDataDisplay from "../components/PFDComponents/PfdWindDataDisplay";
import DmeInfoWindow from "../components/PFDComponents/DmeInfoWindow";

import PfdHsiDisplay2 from "../components/PFDComponents/PfdHsiDisplay2";
import DynBezelRow from "../components/PFDComponents/DynBezelRow";
import XponderRow from "../components/PFDComponents/XponderRow";
import CodeRow from "../components/PFDComponents/CodeRow";
import { data } from "../../public/pfd";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pfdStore");
export default {
  name: "SimulationView",
  components: {
    PfdInsetMapDisplay,
    PfdWindDataDisplay,
    PfdHsiDisplay2,
    DynBezelRow,
    XponderRow,
    DmeInfoWindow,
    CodeRow,
  },
  data() {
    return {
      count: 0,
      currentKey: "",
      label: "",
      keySearch: "",
      pfdWindData: "option1",
      pfdMapWindow: "insetTraffic",
      dmeInfoWindow: true,
      rowType: "DynBezelRow",
      transponderCode: ["1", "2", "0", "0"],
    };
  },
  created: function() {
    this.currentKey = "Top";
    this.$store.dispatch("simulationStore/setPfdData");
  },

  computed: {
    selectedKey: function() {
      return data.find((x) => x.buttonName == this.currentKey);
    },
    ancestor: function() {
      return this.selectedKey.ancestors[this.selectedKey.level - 1];
    },
    pfdData: function() {
      return this.$store.getters["simulationStore/getPfdData"];
    },
  },
  methods: {
    searchForKey: async function(payload) {
      try {
        let keyResults = await data.find((x) => x.buttonName == payload[0]);
        let ancestor = payload[1];
        let {
          buttonType,
          buttonName,
          divId,
          imageClass,
          rowType,
          toggle,
        } = await keyResults;

        if (buttonType == "menu") {
          this.selectCurrentRow(keyResults, ancestor, rowType);
        } else if (toggle) {
          this.toggleDisplay(keyResults, divId);
        } else if (imageClass) {
          this[divId] = imageClass;
        } else {
          console.log("shouldn't be anything else");
        }
      } catch (err) {
        console.log(err);
      }
    },

    selectCurrentRow: function(keyResults, ancestor, rowType) {
      if (keyResults.buttonName == "Back") {
        this.rowType = rowType;
        this.goBackOneLevel(ancestor);
      } else {
        this.rowType = rowType;
        this.currentKey = keyResults.buttonName;
      }
    },

    toggleDisplay: function(keyResults, divId) {
      if (keyResults.toggle) {
        this[divId] ? (this[divId] = false) : (this[divId] = true);
      }
    },
    goBackOneLevel: function(ancestor) {
      this.currentKey = ancestor;
    },
    countUp: function() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
.BEZELKEYSIMCONTAINER {
  height: 85vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 1fr;
  color: var(--lightWhite);
}

.simContainer {
  background: url("../../src/assets/pfdImages/pfdSimBackground.svg");
  width: 699.715px;
  height: 370.5px;
  margin: auto;
  display: grid;
  grid-template-columns: 12px 165px 4px 31px 19px 202px 34px 89px 125px 11px 8px 34px;
  grid-template-rows: 45px 222px 13px 83px;
  position: relative;
}
#pfdMapWindow {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
  margin-bottom: 10px;
}
#pfdWindData {
  grid-column: 4/6;
  grid-row: 2/3;
  align-self: center;
  margin-bottom: 220%;
}
#horizon {
  grid-column: 2/10;
  grid-row: 1/3;
  background: url("../../public/pfdImages/Horizon.png");
}
#hsiDisplay {
  grid-column: 5/7;
  grid-row: 2/3;

  width: 100%;
  height: 100%;
}
#pfdBezelRow {
  grid-column: 1/12;
  grid-row: 4/5;
}
#dmeInfoWindow {
  grid-column: 4/6;
  grid-row: 2/3;
  align-self: end;
  margin-bottom: 34%;
}
#pfdTransponder {
  grid-column: 8/9;
  grid-row: 3/4;
}
</style>
