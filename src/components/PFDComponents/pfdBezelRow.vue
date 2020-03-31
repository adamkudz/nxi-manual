<template>
  <div class="PFDBEZELROWCONTAINER">
    <div class="pfdBezelRow">
      <div class="labelGrid">
        <p
          @click="selectCurrentKey"
          :id="label"
          v-for="(label, index) in labels"
          :key="index"
        >
          {{ label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pfdBezelRow",
  props: ["count", "selected", "currentKey", "highlighted"],
  data() {
    return {};
  },

  methods: {
    selectCurrentKey: function(e) {
      if (this.highlighted !== e.target.id) {
      } else if (this.selected.buttonName == e.target.id) {
      } else {
        this.$emit("countUp");
      }
    }
  },
  computed: {
    labels: function() {
      return this.currentKey.labels;
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
