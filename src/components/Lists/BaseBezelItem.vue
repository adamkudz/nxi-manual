<template>
  <div class="BASEBEZELCONTAINER">
    <div :id="results.id" class="bezelCover"></div>
    <div class="bezelBox">
      <div class="totalKey">
        <p>{{ results.buttonName }}</p>
      </div>
      <div class="bezelDesc">
        <p>{{ results.desc | limitLength }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBezelItem",
  props: ["results"],
};
</script>

<style lang="scss" scoped>
.BASEBEZELCONTAINER {
  width: 100%;
  height: 4em;
  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.bezelCover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
}
.bezelBox {
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 100%;
}

.totalKey {
  background: url("../../assets/totalBezelKey.svg") no-repeat;

  background-size: 50%;
  background-position: top -10% left 50%;
  p {
    color: var(--brightWhite);
    font-weight: 700;
    text-align: center;
    margin-top: 3%;
  }
}
.bezelDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
  p {
    margin: 0.5em;
  }
}
</style>
