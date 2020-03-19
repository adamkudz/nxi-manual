<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <div class="label"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BackKey from "../BezelKeyComponents/BackKey";
import BaseKey from "../BezelKeyComponents/BaseKey";
import InputDataKey from "../BezelKeyComponents/InputDataKey";
import RowKey from "../BezelKeyComponents/RowKey";
import ToggleDisplayKey from "../BezelKeyComponents/ToggleDisplayKey";
import ToggleItemsKey from "../BezelKeyComponents/ToggleItemsKey";
export default {
  name: "TopRow",
  props: ["keyData", "pfdData"],
  components: {
    BaseKey,
    BackKey,
    InputDataKey,
    RowKey,
    ToggleDisplayKey,
    ToggleItemsKey
  },
  data() {
    return {
      buttonType: "BaseKey"
    };
  },
  computed: {},
  methods: {
    selectKey: function(e) {
      const target = e.target.id;
      this.$emit("selectKey", target);
    }
  }
  // mounted: function() {
  //   let keylabels = this.keyData.labels;
  //   keylabels.forEach(label => {
  //     this.keyArray.push(this.pfdData.find(x => x.buttonName == label));
  //   });
  // }
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
