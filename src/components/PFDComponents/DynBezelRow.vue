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
export default {
  name: "dynBezelRow",
  props: ["selectedKey", "ancestor", "pfdData"],
  data() {
    return {
      localKey: "",
      lightArray: ""
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
      if (this.localKey.buttonType == "bezelGroup") {
        this.lightArray = this.selectedKey.lightArray;
        let divId = this.$refs.light[e.target.firstElementChild.id];
        this.toggleBezelGroup(e, divId, this.lightArray);
      } else if (this.localKey.buttonType == "display") {
        console.log("display");
        this.toggleBezelLight(e);
        this.searchForKey(e);
      } else {
        this.searchForKey(e);
      }
    },
    toggleBezelGroup: function(e, divId, lightArray) {
      let lightRow = this.$refs.light;
      lightArray.forEach(light => {
        lightRow[light].classList.remove("labelLightOn");
      });
      lightRow[divId.id].classList.add("labelLightOn");
      this.searchForKey(e);
    },
    toggleBezelLight: function(e) {
      let divId = this.$refs.light[e.target.firstElementChild.id];
      if (divId.classList.length < 2) {
        divId.classList.add("labelLightOn");
      } else {
        divId.classList.remove("labelLightOn");
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
        console.log(row);
      });
    }
  },
  beforeUpdate: function() {
    this.removeLights();
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