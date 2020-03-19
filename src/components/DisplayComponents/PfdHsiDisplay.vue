<template>
  <div class="PFDHSIDISPLAYCONTAINER">
    <div class="magenta">
      <img src="../../../public/pfdImages/magenta.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "PfdHsiDisplay"
};
</script>

<style lang="scss" scoped>
.PFDHSIDISPLAYCONTAINER {
  height: 100%;
  width: 100%;
  background: url("../../../public/pfdImages/nxiCdi.png") no-repeat;
  background-size: cover;
  display: grid;
}
.magenta {
  padding-left: 22px;
  padding-top: 35px;
  padding-bottom: 22px;
}
</style>