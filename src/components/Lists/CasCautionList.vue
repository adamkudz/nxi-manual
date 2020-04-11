<template>
  <div class="CAUTIONCONTAINER">
    <div class="cautionBox">
      <div class="cautionName">
        <p>{{ cautions.message }}</p>
      </div>
      <div class="cautionDesc">
        <p>{{ cautions.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CasCautionList",
  props: ["cautions"]
};
</script>

<style lang="scss" scoped>
.CAUTIONCONTAINER {
  width: 100%;
  height: 4em;
  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
}
.cautionBox {
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 100%;
}
.cautionName {
  background: black;
  color: var(--cautionText);
  width: 80%;
  text-align: center;
  justify-self: center;
  align-self: center;
  line-height: 1.9;
}
.cautionDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
}
</style>
