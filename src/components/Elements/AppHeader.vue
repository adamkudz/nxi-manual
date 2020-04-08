<template>
  <div class="titleBox">
    <h1 class="smallTitle">Avionics Companion</h1>
    <p>Garmin G1000 NXi</p>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.titleBox {
  font-family: var(--daysFont);
  color: var(--mainYellow);
  padding: 3%;
  margin: auto;
  width: 85%;
  p {
    text-align: center;
    font-family: var(--mainFont);
    margin-top: 10px;
    font-size: 25px;
    font-style: italic;

    color: var(--lightFont);
  }
  hr {
    color: var(--mainYellow);
  }
}
.titleText {
  font-size: 49px;
}
.smallTitle {
  font-size: 29px;
  text-align: center;
}
</style>
