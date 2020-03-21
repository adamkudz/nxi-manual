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
  height: 100px;
  width: 100px;
}
.insetTraffic {
  background: url("../../../src/assets/pfdImages/traffic.png");
}
.hidden {
  display: none;
}
</style>
