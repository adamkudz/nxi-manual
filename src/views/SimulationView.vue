<template>
  <div class="BEZELKEYSIMCONTAINER">
    <header>
      <h1>Bezel Key Simulation</h1>
    </header>
    <div class="simContainer">
      <div id="pfdMapWindow">
        <PfdMapWindowDisplay />
      </div>

      <div id="hsiDisplay">
        <PfdHsiDisplay />
      </div>
      <div id="pfdBezelRow">
        <DynBezelRow
          :selectedKey="selectedKey"
          :ancestor="ancestor"
          @searchForKey="searchForKey"
          @selectCurrentKey="selectCurrentKey"
        />
      </div>

      <div id="pfdWindData">
        <pfdWindDataDisplay :currentImage="pfdWindData" />
      </div>
      <div id="pfdTransponder"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import PfdMapWindowDisplay from "../components/PFDComponents/PfdMapWindowDisplay";
import PfdWindDataDisplay from "../components/PFDComponents/PfdWindDataDisplay";

import PfdHsiDisplay from "../components/PFDComponents/PfdHsiDisplay";
import DynBezelRow from "../components/PFDComponents/DynBezelRow";
import { data } from "../../public/pfd";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pfdStore");
export default {
  name: "SimulationView",
  components: {
    PfdMapWindowDisplay,
    PfdWindDataDisplay,

    PfdHsiDisplay,
    DynBezelRow
  },
  data() {
    return {
      count: 0,
      currentKey: "",
      label: "",
      keySearch: "",
      pfdWindData: ""
    };
  },
  created: function() {
    this.label = "Top";
  },

  computed: {
    selectedKey: function() {
      return data.find(x => x.buttonName == this.label);
    },
    ancestor: function() {
      return this.selectedKey.ancestors[this.selectedKey.level - 1];
    }
  },
  methods: {
    searchForKey: async function(payload) {
      try {
        let keyResults = await data.find(x => x.buttonName == payload[0]);
        let current = payload[1];
        let buttonType = keyResults.buttonType;
        let buttonName = keyResults.buttonName;
        let divId = keyResults.divId;
        let imageClass = keyResults.imageClass;
        if (buttonType == "display") {
          this[divId] = imageClass;
        } else {
          this.selectCurrentKey(keyResults, current);
        }
      } catch (err) {
        console.log(err);
      }
    },

    selectCurrentKey: function(keyResults, current) {
      if (keyResults.buttonName == "Back") {
        this.goBackOneLevel(current);
      } else {
        this.label = keyResults.buttonName;
      }
    },
    modifyDisplay: function(buttonName) {},
    goBackOneLevel: function(current) {
      this.label = current;
    },
    countUp: function() {
      this.count++;
    }
  }
};
</script>

<style lang="scss" scoped>
.BEZELKEYSIMCONTAINER {
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-rows: 30vh 3fr 1fr;
  color: var(--lightWhite);
}

.simContainer {
  background: url("../../public/pfdImages/pfdSimBackground.png");
  width: 700px;
  height: 363px;
  margin: auto;
  display: grid;
  grid-template-columns: 12px 165px 4px 31px 19px 202px 34px 89px 125px 11px 8px 34px;
  grid-template-rows: 45px 224px 12px 83px;
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
  margin-top: 40px;
}
#horizon {
  grid-column: 2/10;
  grid-row: 1/3;
  background: url("../../public/pfdImages/Horizon.png");
}
#hsiDisplay {
  grid-column: 5/7;
  grid-row: 2/3;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
#pfdBezelRow {
  grid-column: 1/12;
  grid-row: 4/5;
}
</style>