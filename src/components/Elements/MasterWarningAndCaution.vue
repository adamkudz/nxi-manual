<template>
  <div class="MASTERWARNINGANDCAUTIONCONTAINER">
    <div class="masterBox">
      <div class="casButton" id="warning">
        <p>MASTER</p>
        <p>WARNINGS</p>
      </div>
      <div class="casButton" id="caution">
        <p>MASTER</p>
        <p>CAUTIONS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterWarningAndCaution"
};
</script>

<style lang="scss" scoped>
.MASTERWARNINGANDCAUTIONCONTAINER {
  width: 100%;
}
.masterBox {
  margin: 0 auto;
  display: grid;
  width: 70%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
}
.casButton {
  width: 95px;
  height: 69px;
  padding-top: 0.3em;
  border: 5px solid #000000;
  justify-self: center;
  align-self: center;
  p {
    text-align: center;
    font-weight: 600;
    font-size: 0.95em;
  }
}
#warning {
  background: #cb1b21;
}
#caution {
  background: #d1c200;
}
</style>
