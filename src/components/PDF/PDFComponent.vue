<template>
  <div class="PDFCONTAINER">
    <img :src="image" width="700px" alt="docs" />
    <div class="backButton">
      <button @click="togglePDF" class="navButton">CLOSE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PDFComponent",
  props: ["selected"],
  data() {
    return {
      image: `https://nxi-jpegs.s3.amazonaws.com/pfd-docs/${this.selected.ref[0]}`,
    };
  },
  components: {},
  computed: {},
  methods: {
    togglePDF: function () {
      this.$emit("togglePDF");
    },
  },
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
