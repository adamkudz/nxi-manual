<template>
  <div class="BEZELROWCONTAINER">
    <div class="BezelRow">
      <div class="keyGrid">
        <div
          @click="keyClick"
          v-for="(bezel, index) in bezelKeys"
          :key="index"
          class="keyItems"
          :id="bezel"
        >
          <BaseKey :bezel="bezel"></BaseKey>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseKey from "../BezelKeyComponents/BaseKey";
import ToggleDisplayKey from "../BezelKeyComponents/ToggleDisplayKey";
import RowKey from "../BezelKeyComponents/RowKey";

import RowStore from "../../store/rowModules/TopRowStore";
export default {
  name: "BaseRow",
  components: {
    BaseKey,
    ToggleDisplayKey
  },

  props: [],

  data() {
    return {
      currentKey: "Top",
      selectedKey: ""
    };
  },
  computed: {
    bezelKeys: function() {
      return this.$store.getters["TopRowStore/getBezelKeys"];
    },
    currentKeyData: function() {}
  },

  methods: {
    keyClick: function(e) {
      console.log(e.target.id);
      this.selectedKey = e.target.id;
    }
  }
};
</script>

<style lang="scss" scoped>
.BEZELROWCONTAINER {
  width: 100%;
  height: 100%;
  position: relative;
}
.BezelRow {
  width: 100%;
  height: 100%;
}

.keyGrid {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 100%;
  padding-left: 2%;
  padding-right: 3.5%;
}
.keyItems {
  color: var(--brightWhite);
  font-family: "Segoe UI";
  font-weight: 700;
  font-size: 0.6em;
  text-align: center;
  height: calc(100% * 5);
}

.keyLight {
  height: 2.3%;
  width: 35%;
  border-radius: 1px;
  background: var(--bezelLightOff);
  margin-left: calc(100% - 67.5%);
  margin-top: calc(100% - 97%);
}
.keyLightOn {
  background: var(--mainGreen);
}
</style>
