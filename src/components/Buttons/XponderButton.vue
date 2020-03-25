<template>
  <div class="buttonContainer">
    <div @click="selectLocalKey" class="label">
      <p>{{ button.name }}</p>

      <div
        v-if="button.light"
        class="labelLight"
        :class="{ labelLightOn: button.lit }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XponderButton",
  props: ["button"],
  methods: {
    selectLocalKey(e) {
      this.$emit("selectLocalKey", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.buttonContainer {
  height: 100%;
}
.label {
  color: var(--brightWhite);
  font-family: "Segoe UI";
  font-weight: 700;
  font-size: 0.63em;
  text-align: center;
  height: 7vh;
}
.labelLight {
  height: 1.75px;
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
