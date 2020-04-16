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
  grid-template-columns: 3fr 7fr;

  width: 100%;
  height: 4em;
  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
  overflow: hidden;
}

.resultsButtonName {
  background: url("../assets/totalBezelKey.svg") no-repeat;
  background-size: 50%;
  background-position: left 50% top -13%;

  width: 100%;
  min-height: 50px;
  p {
    color: var(--brightWhite);
    font-weight: 700;
    text-align: center;
    margin-top: 3%;
  }
}
.resultsDesc {
  text-align: center;
  margin: 0.5em;
  font-size: 0.85em;
  color: var(--lightWhite);
}
.result {
  color: var(--lightWhite);
  font-family: "Oswald";
  font-size: 1.3em;
}
</style>
