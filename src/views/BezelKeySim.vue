<template>
  <div class="BEZELKEYSIMCONTAINER">
    <header>
      <h1>Bezel Key Simulation</h1>
    </header>
    <div class="simContainer">
      <div id="horizon"></div>
      <div id="pfdMapWindow">
        <PfdMapWindowDisplay />
      </div>
      <div id="pfdWindDisplay">
        <PfdWindDisplay />
      </div>
      <div id="hsiDisplay">
        <PfdHsiDisplay />
      </div>

      <div id="pfdWind"></div>
      <div id="pfdTransponder"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import PfdMapWindowDisplay from "../components/PFDComponents/PfdMapWindowDisplay";
import PfdWindDisplay from "../components/PFDComponents/PfdWindDisplay";
import PfdHsiDisplay from "../components/PFDComponents/PfdHsiDisplay";
export default {
  name: "BezelKeySim",
  components: {
    PfdMapWindowDisplay,
    PfdWindDisplay,
    PfdHsiDisplay
  }
};
</script>

<style lang="scss" scoped>
.BEZELKEYSIMCONTAINER {
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-rows: 30vh 3fr 1fr;
  color: var(--lightWhite);
}

.simContainer {
  background: url("../../public/pfdImages/rectangle_41.png");
  width: 700px;
  height: 363px;
  margin: auto;
  display: grid;
  grid-template-columns: 12px 165px 4px 31px 19px 202px 34px 89px 125px 11px 8px 34px;
  grid-template-rows: 45px 211px 24px 83px;
}
#pfdMapWindow {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
}
#pfdWindDisplay {
  grid-column: 4/5;
  grid-row: 2/3;
  align-self: start;
}
#horizon {
  grid-column: 2/10;
  grid-row: 1/3;
  background: url("../../public/pfdImages/Horizon.png");
}
#hsiDisplay {
  grid-column: 5/7;
  grid-row: 2/3;
}
</style>