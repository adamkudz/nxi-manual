<template>
  <div class="PDFCONTAINER">
    <img src="../../assets/pdfPages/page66.jpg" width="700px" />
    <div class="backButton">
      <button @click="togglePDF" class="navButton">CLOSE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PDFComponent",
  components: {},
  methods: {
    togglePDF: function() {
      this.$emit("togglePDF");
    }
  }
};
</script>

<style lang="scss" scoped>
.PFDCONTAINER {
  width: 100vw;
  height: 100vh;
  display: grid;
}
.backButton {
  width: 100%;
  display: flex;
  place-content: center;
  button {
    margin-top: 10px;
  }
}
</style>
