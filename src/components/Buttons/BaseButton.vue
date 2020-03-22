<template>
  <div @click="selectLocalKey" class="label">
    <div>
      <p>{{ button.name }}</p>
    </div>
    <div
      v-if="button.light"
      class="labelLight"
      :class="{ labelLightOn: button.lit }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["button"],
  methods: {
    selectLocalKey(e) {
      this.$emit("selectLocalKey", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  color: var(--brightWhite);
  font-family: "Segoe UI";
  font-weight: 700;
  font-size: 0.63em;
  text-align: center;
  height: calc(100% * 5);
}
.labelLight {
  height: 2.3%;
  width: 35%;
  border-radius: 1px;
  background: var(--bezelLightOff);
  margin-left: calc(100% - 67.5%);
  margin-top: calc(100% - 99%);
}
.labelLightOn {
  background: var(--mainGreen);
}
</style>
