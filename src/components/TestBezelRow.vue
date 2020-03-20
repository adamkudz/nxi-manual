<template>
  <div v-if="count >= bezelKey.level" class="BEZELROWCONTAINER">
    <div v-if="labels !== null" class="pfdBezelRow">
      <div class="labelGrid">
        <div
          @click="selectCurrentKey"
          v-for="(label, index) in labels"
          :key="index"
          :id="label"
          ref="labelList"
          class="labelItems"
        >
          <div v-if="label !== highlighted" class="labelName">
            <p>{{ label }}</p>
          </div>
          <div v-else class="highlighted">
            <p>{{ label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestBezelRow",
  props: ["bezelKey", "highlighted", "count", "selected"],
  data() {
    return {};
  },
  methods: {
    selectCurrentKey: function(e) {
      if (this.highlighted !== e.target.id) {
        console.log("Wrong Button");
      } else if (this.selected.buttonName == e.target.id) {
        this.$emit("selectCurrentKey", false);
      } else {
        this.$emit("selectCurrentKey", e.target.id);
      }
    }
  },
  computed: {
    labels: function() {
      return this.bezelKey.labels;
    }
  }
};
</script>

<style lang="scss" scoped>
.DYNBEZELROWCONTAINER {
  width: 100%;
  height: 100%;
  position: relative;
}
.pfdBezelRow {
  background: url("../assets/totalBezelKeys.png") no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
}
.labelGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 85px;
  padding-left: 2%;
  padding-right: 3.5%;
  p {
    color: var(--brightWhite);
    font-family: "Segoe UI";
    font-weight: 700;
    font-size: 0.6em;
    text-align: center;
  }
}
.labelItems {
  border: transparent;
}
.labelName {
  border: transparent;
}
.highlighted {
  border: var(--mainGreen) solid 1px;
}
</style>
