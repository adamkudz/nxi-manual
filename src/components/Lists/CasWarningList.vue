<template>
  <div class="WARNINGCONTAINER">
    <div class="warningBox">
      <div class="warningName">
        <p>{{ warnings.message }}</p>
      </div>
      <div class="warningDesc">
        <p>{{ warnings.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CasWarningList",
  props: ["warnings"]
};
</script>

<style lang="scss" scoped>
.WARNINGCONTAINER {
  width: 100%;
  height: 4em;
  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
}
.warningBox {
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 100%;
}
.warningName {
  background: black;
  color: red;
  width: 80%;
  text-align: center;
  justify-self: center;
  align-self: center;
  line-height: 1.7;
}
.warningDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
}
</style>
