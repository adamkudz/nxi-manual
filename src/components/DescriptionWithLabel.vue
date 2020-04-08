<template>
  <div>
    <div class="resultsContainer">
      <div class="resultsButtonName" v-if="selected">
        <p>{{ selected.buttonName }}</p>
      </div>
      <div v-else class="resultsButtonName">
        <p>{{ selectionArray[count].buttonName }}</p>
      </div>
      <p class="resultsDesc">{{ selected.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionWithLabel",
  props: ["selectionArray", "count", "selected"],
};
</script>

<style lang="scss" scoped>
.resultsContainer {
  display: grid;
  grid-template-columns: 2fr 8fr;

  background: #2c2a2a;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #707070;
}

.resultsButtonName {
  background: url("../assets/singleLabel.svg") no-repeat;
  background-size: 70%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  p {
    color: var(--brightWhite);
    font-weight: 700;
    font-size: 0.85em;
  }
}
.resultsDesc {
  text-align: center;
  margin: auto;
  font-size: 0.85em;
  color: var(--lightWhite);
}
.result {
  color: var(--lightWhite);
  font-family: "Oswald";
  font-size: 1.3em;
}
</style>
