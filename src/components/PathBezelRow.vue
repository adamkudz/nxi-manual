<template>
  <div v-if="count >= bezelKey.level" class="BEZELROWCONTAINER">
    <div v-if="labels !== null" class="pfdBezelRow">
      <div class="labelGrid">
        <div
          @click="selectCurrentKey"
          v-for="(label, index) in labels"
          :key="index"
          :id="label"
          ref="labelList"
          class="labelItems"
        >
          <div v-if="label !== highlighted" class="labelName">
            <p>{{ label }}</p>
          </div>
          <div v-else class="highlighted">
            <p>{{ label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PathBezelRow",
  props: ["bezelKey", "highlighted", "count", "selected"],
  data() {
    return {};
  },
  methods: {
    selectCurrentKey: function (e) {
      if (this.highlighted !== e.target.id) {
      } else if (this.selected.buttonName == e.target.id) {
        this.$emit("selectCurrentKey", false);
      } else {
        this.$emit("selectCurrentKey", e.target.id);
      }
    },
  },
  computed: {
    labels: function () {
      return this.bezelKey.labels;
    },
  },
};
</script>

<style lang="scss" scoped>
.DYNBEZELROWCONTAINER {
  width: 100%;
  height: 100%;
  position: relative;
}
.pfdBezelRow {
  background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
  background-size: contain;

  width: 100%;
  height: 100%;
}
.labelGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 85px;
  padding-left: 2%;
  padding-right: 3.5%;
  p {
    color: var(--brightWhite);
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 0.7em;
    text-align: center;
  }
}
.labelItems {
  border: transparent;
}
.labelName {
  border: transparent;
}
.highlighted {
  border: var(--mainGreen) solid 1px;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .DYNBEZELROWCONTAINER {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
  .labelItems {
    border: transparent;
  }
  .labelName {
    border: transparent;
  }
  .highlighted {
    border: var(--mainGreen) solid 1px;
  }
}
/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen and (min-device-width: 834px) and (max-device-width: 834px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .DYNBEZELROWCONTAINER {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
  .labelItems {
    border: transparent;
  }
  .labelName {
    border: transparent;
  }
  .highlighted {
    border: var(--mainGreen) solid 1px;
  }
}
/* ----------- iPad Pro 12.9" ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: contain;

    width: 100%;
    height: 100%;
  }
}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
}

/*LAPTOPS */
/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
}
@media screen and (min-device-width: 1300px) and (max-device-width: 2500px) and (-webkit-min-device-pixel-ratio: 1) {
  .pfdBezelRow {
    background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
    background-size: cover;

    width: 100%;
    height: 100%;
  }
  .labelGrid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 85px;
    padding-left: 2%;
    padding-right: 3.5%;
    p {
      color: var(--brightWhite);
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.75em;
      text-align: center;
    }
  }
}
</style>
