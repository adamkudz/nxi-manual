<template>
  <div class="PFDINSETMAPDISPLAYCONTAINER">
    <div class="inset" :class="imageClass"></div>
  </div>
</template>

<script>
export default {
  name: "PfdInsetMapDisplay",
  props: ["imageClass"]
};
</script>

<style lang="scss" scoped>
.PFDINSETMAPDISPLAYCONTAINER {
  height: 100%;
  width: 100%;
}
.inset {
  width: 164px;
  height: 156px;
}
.insetTraffic {
  background: url("../../../src/assets/pfdImages/traffic.svg");
}
.hidden {
  display: none;
}
</style>
