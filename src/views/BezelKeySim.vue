<template>
  <div class="BEZELKEYSIMCONTAINER">
    <header>
      <h1>Bezel Key Simulation</h1>
    </header>
    <div class="simContainer">
      <div id="pfdMapWindow">
        <PfdInsetMapDisplay />
      </div>

      <div id="hsiDisplay">
        <PfdHsiDisplay />
      </div>
      <div id="pfdBezelRow">
        <pfdBezelRow
          :pfdData="pfdData"
          :selected="selected"
          :currentKey="selectionArray[this.count]"
          :highlighted="highlightArray[this.count]"
          :count="count"
          @selectCurrentKey="selectCurrentKey"
          @countUp="countUp"
        />
      </div>

      <div id="pfdWindData"></div>
      <div id="pfdTransponder"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import PfdInsetMapDisplay from "../components/PFDComponents/PfdInsetMapDisplay";

import PfdHsiDisplay from "../components/PFDComponents/PfdHsiDisplay";
import pfdBezelRow from "../components/PFDComponents/pfdBezelRow";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pfdStore");
export default {
  name: "BezelKeySim",
  components: {
    PfdInsetMapDisplay,

    PfdHsiDisplay,
    pfdBezelRow
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    ...mapState(["pfdData", "selected", "selectionArray", "highlightArray"])
  },
  methods: {
    selectCurrentKey: function(payload) {
      console.log(payload);
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
  grid-column: 4/5;
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