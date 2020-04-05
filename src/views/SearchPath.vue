<template>
  <div class="TESTCOMPONENTCONTAINER">
    <div v-if="showPDF" class="pdfContainer">
      <PDFComponent @togglePDF="togglePDF" :selected="selected" />
    </div>
    <header>
      <h1>Pathfinder</h1>
      <div class="fullPathButton">
        <button class="navButton" @click="showFullPath">SHOW FULL PATH</button>
      </div>
    </header>
    <div class="featureDescription">
      <DescriptionWithLabel :selected="selected" :count="count" />
    </div>

    <div
      v-for="(bezelKey, index) in selectionArray"
      :key="bezelKey.index"
      class="bezelRows"
    >
      <PathBezelRow
        @selectCurrentKey="selectCurrentKey"
        :bezelKey="selectionArray[index]"
        :count="count"
        :highlighted="highlightArray[index]"
        :selected="selected"
        class="row"
      />
    </div>
    <div v-if="displayDescription" class="buttonContainer">
      <button v-if="selected.ref" class="navButton" @click="togglePDF">
        See Docs
      </button>
      <button class="navButton" @click="goHome">Search Again</button>
    </div>
  </div>
</template>

<script>
import PathBezelRow from "../components/PathBezelRow.vue";
import pfdBezelRow from "../components/PFDComponents/pfdBezelRow.vue";
import DescriptionWithLabel from "../components/DescriptionWithLabel";
import PDFComponent from "../components/PDF/PDFComponent";

export default {
  name: "SearchPath",

  components: {
    PathBezelRow,
    DescriptionWithLabel,
    PDFComponent,
    pfdBezelRow,
  },
  data() {
    return {
      selectionArray: this.$store.getters["pfdStore/getSelectionArray"],
      highlightArray: this.$store.getters["pfdStore/getHighlightArray"],
      selected: this.$store.getters["pfdStore/getSelected"],
      count: 0,
      displayDescription: false,
      showPDF: false,
    };
  },
  mounted() {},
  methods: {
    countUp: function () {
      this.count++;
    },
    countDown: function () {
      this.count--;
    },
    selectCurrentKey(payload) {
      if (payload) {
        this.count++;
      } else {
        this.displayDescription = true;
      }
    },
    goHome: function () {
      this.$router.push("/");
    },
    goSimulate: function () {
      this.$router.push("/simulationview");
    },
    showFullPath: function () {
      this.count = 5;
      this.displayDescription = true;
    },
    togglePDF: function () {
      this.showPDF = !this.showPDF;
    },
  },
};
</script>

<style lang="scss" scoped>
.TESTCOMPONENTCONTAINER {
  height: 100vh;
  width: 100vw;
  color: var(--lightWhite);
}
header {
  text-align: center;
  padding: 1em;
  button {
    margin-top: 1em;
  }
}
.pdfContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2c2a2a;
  padding: 2em;
}
.featureDescription {
  padding: 20px;
  max-width: 700px;
  margin: auto;
}
.bezelRows {
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 2em;
  padding-bottom: 20px;
  padding-top: 20px;
  grid-auto-rows: 10vh;

  max-width: 750px;
}
.buttonContainer {
  width: 100%;
  display: grid;
  grid-gap: 1.3em;
  grid-template-rows: 1fr 1fr;
  place-content: center;
  padding-top: 2em;
}
.fullPathButton {
  text-align: center;
  margin-top: 1em;
}
</style>
