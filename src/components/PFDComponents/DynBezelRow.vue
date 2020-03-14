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
  props: ["selectedKey", "ancestor"],
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
      const ancestor = this.ancestor;

      this.$emit("searchForKey", [target, ancestor]);
    }
  },

  computed: {
    labels: function() {
      return this.selectedKey.labels;
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
    &::after {
      content: "aa ";
      height: 5px;
      width: 20px;
      background: green;
    }
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