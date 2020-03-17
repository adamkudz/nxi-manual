<template>
  <div class="BEZELKEYSIMCONTAINER">
    <header>
      <h1>Bezel Key Simulation</h1>
    </header>
    <div class="simContainer">
      <div id="pfdMapWindow"></div>

      <div id="hsiDisplay"></div>
      <div id="pfdBezelRow"></div>

      <div id="pfdWindData"></div>
      <div id="dmeInfoWindow"></div>
      <div id="pfdTransponder"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "SimulationView",
  components: {},
  data() {
    return {};
  },
  created: function() {},

  computed: {},
  methods: {}
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
  background: url("../../public/pfdImages/pfdSimBackground.png");
  width: 700px;
  height: 363px;
  margin: auto;
  display: grid;
  grid-template-columns: 12px 165px 4px 31px 19px 202px 34px 89px 125px 11px 8px 34px;
  grid-template-rows: 45px 222px 12px 83px;
  position: relative;
}
#pfdMapWindow {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
  margin-bottom: 10px;
}
#pfdWindData {
  grid-column: 4/6;
  grid-row: 2/3;
  align-self: center;
  margin-bottom: 220%;
}
#horizon {
  grid-column: 2/10;
  grid-row: 1/3;
  background: url("../../public/pfdImages/Horizon.png");
}
#hsiDisplay {
  grid-column: 5/7;
  grid-row: 2/3;

  width: 100%;
  height: 100%;
}
#pfdBezelRow {
  grid-column: 1/12;
  grid-row: 4/5;
}
#dmeInfoWindow {
  grid-column: 4/6;
  grid-row: 2/3;
  align-self: end;
  margin-bottom: 34%;
}
</style>
