<template>
  <div class="PFDWINDDISPLAYCONTAINER">
    <div :class="currentImage"></div>
  </div>
</template>

<script>
export default {
  name: "PfdWindDataDisplay",
  props: ["currentImage"],
  data() {
    return {
      currentClass: "option1"
    };
  },
  computed: {
    imageUrl: function() {
      return `../../../public/pfdImages/${this.currentImage}`;
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
#windImage {
  width: 100%;
  height: 100%;
}
.option1 {
  background: url("../../../public/pfdImages/option1.png");
  width: 52px;
  height: 36px;
}
.option2 {
  background: url("../../../public/pfdImages/option2.png");
  width: 52px;
  height: 36px;
}
.option3 {
  background: url("../../../public/pfdImages/option3.png");
  width: 52px;
  height: 36px;
}
.hidden {
  display: none;
}
</style>