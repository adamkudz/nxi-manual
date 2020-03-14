<template>
  <div class="PFDWINDDISPLAYCONTAINER">
    <div class="windImage" :class="imageClass"></div>
  </div>
</template>

<script>
export default {
  name: "PfdWindDataDisplay",
  props: {
    imageClass: {
      type: String,
      required: true,
      default: "option1"
    }
  }
};
</script>

<style lang="scss" scoped>
.PFDWINDDISPLAYCONTAINER {
  height: 100%;
  width: 100%;
  position: relative;
}
.windImage {
  width: 52px;
  height: 36px;
}
.option1 {
  background: url("../../../src/assets/pfdImages/option1.png");
}
.option2 {
  background: url("../../../src/assets/pfdImages/option2.png");
}
.option3 {
  background: url("../../../src/assets/pfdImages/option3.png");
}
.hidden {
  display: none;
}
</style>