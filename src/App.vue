<template>
  <div id="app" class="background">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --bgGradLight: #4d5c80;
  --bgGradDark: #181816;
  --lightWhite: #c3c3c3;
  --brightWhite: #f8f8f8;
  --mainGreen: #53ee5e;
  --darkGreen: #3ab142;
  --lightFont: #e4e4e4;
  --labelDeselected: #8a8a8a;
  --bezelLightOff: #e9ffff;

  --bezelGreen: #80ff6a;
}
html {
  font-family: "Segoe UI";

  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.background {
  background: radial-gradient(
    circle,
    rgba(77, 92, 128, 1) 0%,
    rgba(24, 24, 22, 1) 100%
  );
  height: 100vh;
  width: 100vw;
}
.navButton {
  width: 200px;

  border: var(--darkGreen) solid 1px;
  border-radius: 20px;
  line-height: 1.7;
  background: black;
  color: var(--lightFont);

  font-size: 1.1em;
  text-align: center;
  font-family: "Segoe UI";
}
.bezelRowCover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.bezelLabelBackground {
  background: url("./assets/singleLabel.svg") no-repeat;
  background-size: 70%;
  background-position: center;
  p {
    padding: 10px;
    text-align: center;
    color: var(--brightWhite);
  }
}
.notForPhone {
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
