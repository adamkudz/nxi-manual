<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <p
          @click="searchForKey"
          :id="label"
          v-for="(label, index) in labels"
          :key="index"
        >{{ label }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dynBezelRow",
  props: ["count", "selectedKey", "highlighted"],
  data() {
    return {};
  },

  methods: {
    selectCurrentKey: function(e) {
      const target = e.target.id;
      this.$emit("selectCurrentKey", target);
    },
    searchForKey: function(e) {
      const target = e.target.id;
      const current = this.selectedKey.ancestors[this.selectedKey.level - 1];
      this.$emit("searchForKey", [target, current]);
      // this.$emit("update:label", target);
    }
  },

  computed: {
    labels: function() {
      return this.selectedKey.labels;
    },
    getButtonType: function() {
      return this.selectedKey.buttonType;
    }
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
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 85px;
  padding-left: 2%;
  padding-right: 3.5%;
  p {
    color: var(--brightWhite);
    font-family: "Segoe UI";
    font-weight: 700;
    font-size: 0.7em;
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