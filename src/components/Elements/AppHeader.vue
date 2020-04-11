<template>
  <div class="titleBox">
    <h1 class="mainTitle">Avionics Companion</h1>
    <p>Garmin G1000 NXi</p>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.titleBox {
  font-family: var(--daysFont);
  color: var(--mainYellow);
  text-align: center;
  padding: 4%;
  height: 17vh;

  p {
    font-family: var(--mainFont);
    font-weight: 400;

    font-size: 1.625em;
    line-height: 1.4;
    font-style: italic;

    color: var(--lightFont);
    padding: 0.3em;
  }
  hr {
    color: var(--mainYellow);
    width: 70%;
    margin: auto;
  }
}
.mainTitle {
  font-size: 3em;
  line-height: 1.3;
  letter-spacing: -1.03px;
}
.smallTitle {
  font-size: 60px;
  text-align: center;
}
</style>
