<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <div
          class="label"
          @click="selectLocalKey"
          :id="label"
          v-for="(label, index) in labels"
          :key="index"
          ref="labels"
        >
          {{ label }}
          <div :id="index" ref="light"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleLights } from "../../mixins/toggleLights";
export default {
  name: "dynBezelRow",
  mixins: [toggleLights],
  props: ["selectedKey", "ancestor", "pfdData"],
  data() {
    return {
      localKey: "",
      lightArray: "",
      buttonType: ""
    };
  },
  computed: {
    labels: function() {
      return this.selectedKey.labels;
    }
  },
  methods: {
    selectLocalKey: function(e) {
      let target = e.target.id;
      this.localKey = this.pfdData.find(data => data.buttonName == target);
      this.buttonType = this.localKey.buttonType;
      if (this.localKey.buttonType == "bezelGroup") {
        this.lightArray = this.selectedKey.lightArray;
        let divId = this.$refs.light[e.target.firstElementChild.id];
        console.log("hi");
        this.toggleBezelGroup(e, divId, this.lightArray);
        this.searchForKey(e);
      } else if (this.localKey.buttonType == "display") {
        this.toggleBezelLight(e);
      } else {
        this.searchForKey(e);
      }
    },

    searchForKey: function(e) {
      let target = e.target.id;
      let ancestor = this.ancestor;
      this.$emit("searchForKey", [target, ancestor]);
    },

    placeLights: function() {
      let lightRow = this.$refs.light;
      let lightArray = this.selectedKey.lightArray;
      lightRow.forEach(row => {
        if (row.id == lightArray[row.id]) {
          lightRow[row.id].classList.add("labelLight");
        }
      });
    },
    removeLights: function() {
      let lightRow = this.$refs.light;
      lightRow.forEach(row => {
        row.classList.remove("labelLight");
      });
    }
  },
  beforeUpdate: function() {
    this.removeLights();
    this.lightArray = [];
  },
  updated: function() {
    if (this.selectedKey.lightArray) this.placeLights();
  }
};
</script>

<style lang="scss" scoped>
.PFDBEZELROWCONTAINER {
  width: 100%;
  height: 100%;
  position: relative;
}
.pfdBezelRow {
  width: 100%;
  height: 100%;
}

.labelGrid {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 100%;
  padding-left: 2%;
  padding-right: 3.5%;
}
.label {
  color: var(--brightWhite);
  font-family: "Segoe UI";
  font-weight: 700;
  font-size: 0.6em;
  text-align: center;
  height: calc(100% * 5);
}

.labelLight {
  height: 2.3%;
  width: 35%;
  border-radius: 1px;
  background: var(--bezelLightOff);
  margin-left: calc(100% - 67.5%);
  margin-top: calc(100% - 97%);
}
.labelLightOn {
  background: var(--mainGreen);
}
</style>
