<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <div @click="selectLocalKey" class="label">
          <p>0</p>
        </div>
        <div class="label">
          <p>1</p>
        </div>
        <div class="label">
          <p>2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleLights } from "../../mixins/toggleLights";
import CodeButton from "../Buttons/CodeButton";
export default {
  name: "CodeRow",
  mixins: [toggleLights],

  components: {
    CodeButton
  },
  props: ["selectedKey", "ancestor", "pfdData"],
  data() {
    return {
      code: ["1", "2", "0", "0"]
    };
  },
  computed: {
    buttons: function() {
      return this.selectedKey.labels;
    }
  },

  methods: {
    selectLocalKey: function(e) {
      console.log(e);
      e.target.innerText == "Back"
        ? this.searchForLocalKey(e)
        : this.checkButton(e);
    },
    searchForLocalKey: function(e) {
      let target = e.target.innerText;
      let keyResults = this.pfdData.find(data => data.buttonName == target);
      let ancestor = keyResults.ancestors[keyResults.level - 1];
      this.$emit("searchForKey", [keyResults.buttonName, ancestor]);
    },

    checkButton: function(e) {
      console.log(e.target.innerText);
      this.code.push(e.target.innerText);
    },

    displayLit: function() {}
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
  font-size: 0.63em;
  text-align: center;
  height: calc(100% * 5);
}
</style>
