<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <div
          v-for="(button, index) in buttons"
          :key="index"
          class="label"
          :id="button.name"
          ref="labelLight"
        >
          <BaseButton
            @selectLocalKey="selectLocalKey"
            :button="button"
            :id="button.name"
          />
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
      buttonArray: "",
      buttonType: "",
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
    };
  },
  computed: {},

  methods: {
    searchForLocalKey: function(e) {
      let target = e.target.id;
      let keyResults = this.pfdData.find(data => data.buttonName == target);
      let ancestor = keyResults.ancestors[keyResults.level - 1];
      return { keyResults, target, ancestor };
    },

    selectLocalKey: function(e) {
      let { keyResults, target, ancestor } = this.searchForLocalKey(e);
      keyResults.buttonName == "Back" || keyResults.buttonName == "Code"
        ? this.$emit("searchForKey", [target, ancestor])
        : this.checkButton(keyResults);
    },

    checkButton: function(payload) {
      if (payload.buttonName.includes("X")) {
        this.switchTransponder(payload);
      } else {
        this.switchMode(payload);
      }
    },

    changeStatus: function(payload) {
      payload.name !== "Back"
        ? this.updateButton(payload)
        : this.searchForKey(payload.name);
    },

    updateButton: function(payload) {
      this.$store.commit("TransponderStore/UPDATE_BUTTON", payload);
    },

    switchTransponder: function(payload) {
      this.buttons[0].lit = !this.buttons[0].lit;
      this.buttons[0].status = !this.buttons[0].status;
      this.buttons[1].lit = !this.buttons[1].lit;
      this.buttons[1].status = !this.buttons[1].status;
    },
    switchMode: function(payload) {
      let changed = this.buttons.find(
        button => button.name == payload.buttonName
      );
      let lightgroup = [2, 3, 4];
      lightgroup.forEach(light => {
        if (this.buttons[light].lit) {
          this.buttons[light].lit = false;
        }
      });
      changed.lit = !changed.lit;
    },

    displayLit: function() {}
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
// .label {
//   color: var(--brightWhite);
//   font-family: "Segoe UI";
//   font-weight: 700;
//   font-size: 0.63em;
//   text-align: center;
//   height: calc(100% * 5);
// }

// .labelLight {
//   height: 2.3%;
//   width: 35%;
//   border-radius: 1px;
//   background: var(--bezelLightOff);
//   margin-left: calc(100% - 67.5%);
//   margin-top: calc(100% - 97%);
// }
// .labelLightOn {
//   background: var(--mainGreen);
// }
</style>
