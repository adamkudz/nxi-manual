<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <div
          @click="selectLocalKey"
          v-for="(button, index) in storeData"
          :key="index"
          class="label"
          :id="button.name"
        >
          <BaseButton :button="button" :id="button.name" />
          <div v-if="button.light" class="labelLight"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleLights } from "../../mixins/toggleLights";
import BaseButton from "../Buttons/BaseButton";
export default {
  name: "XponderRow",

  components: {
    BaseButton
  },
  props: ["selectedKey", "ancestor", "pfdData"],
  data() {
    return {
      localKey: "",
      lightArray: "",
      buttonType: "",

      storeData: this.$store.state["TransponderStore"].buttons
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
      let ancestor = this.ancestor;
      if (target == "Back") {
        console.log("hit the back key");
        this.searchForKey(target, ancestor);
      }
      this.localKey = this.pfdData.find(data => data.buttonName == target);
    },

    searchForKey: function(target, ancestor) {
      this.$emit("searchForKey", [target, ancestor]);
    }

    // toggleBezelGroup: function(e, divId, lightArray) {
    //   let lightRow = this.$refs.light;
    //   lightArray.forEach(light => {
    //     lightRow[light].classList.remove("labelLightOn");
    //   });
    //   lightRow[divId.id].classList.add("labelLightOn");
    //   this.searchForKey(e);
    // },
    // toggleBezelLight: function(e) {
    //   let lightId = this.$refs.light[e.target.firstElementChild.id];
    //   if (lightId.classList.length < 2) {
    //     lightId.classList.add("labelLightOn");
    //   } else {
    //     lightId.classList.remove("labelLightOn");
    //   }
    // }
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
