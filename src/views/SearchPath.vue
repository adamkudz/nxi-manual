<template>
  <div class="TESTCOMPONENTCONTAINER">
    <header>
      <h2>Search Results</h2>
    </header>
    <div class="featureDescription">
      <DescriptionWithLabel :selected="selected" :count="count" />
      <div class="fullPathButton">
        <button @click="showFullPath">SHOW FULL PATH</button>
      </div>
    </div>

    <div
      v-for="(bezelKey, index) in selectionArray"
      :key="bezelKey.index"
      class="bezelRows"
    >
      <TestBezelRow
        @selectCurrentKey="selectCurrentKey"
        :bezelKey="selectionArray[index]"
        :count="count"
        :highlighted="highlightArray[index]"
        :selected="selected"
        class="row"
      />
    </div>
    <div v-if="displayDescription" class="buttonContainer">
      <button class="navButton" @click="goHome">Search Again</button>
    </div>
  </div>
</template>

<script>
import TestBezelRow from "../components/TestBezelRow.vue";
import DescriptionWithLabel from "../components/DescriptionWithLabel";

export default {
  name: "SearchPath",

  components: {
    TestBezelRow,
    DescriptionWithLabel
  },
  data() {
    return {
      selectionArray: this.$store.getters["pfdStore/getSelectionArray"],
      highlightArray: this.$store.getters["pfdStore/getHighlightArray"],
      selected: this.$store.getters["pfdStore/getSelected"],
      count: 0,
      displayDescription: false
    };
  },
  mounted() {},
  methods: {
    countUp: function() {
      this.count++;
    },
    countDown: function() {
      this.count--;
    },
    selectCurrentKey(payload) {
      if (payload) {
        this.count++;
      } else {
        this.displayDescription = true;
      }
      console.log(payload);
    },
    goHome: function() {
      this.$router.push("/");
    },
    showFullPath: function() {
      this.count = 5;
      this.displayDescription = true;
    }
  }
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
.featureDescription {
  padding: 20px;
  max-width: 864px;
  margin: auto;
}
.bezelRows {
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 2em;
  padding: 20px;
  grid-auto-rows: 10vh;

  max-width: 864px;
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
