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
      <!-- 
      <button @click="getPath" :data-pathid="results.id" class="smallButton">PATH</button>
      <button @click="simulate" :data-pathid="results.id" class="smallButton">SIM</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionWithLabel",
  props: ["selectionArray", "count", "selected"]
};
</script>

<style lang="scss" scoped>
// .resultsContainer {
//   width: 90%;
//   margin: 1em auto;
//   display: grid;
//   padding: 1em;
//   grid-template-columns: 180px 180px 1fr;
//   background: rgb(0, 0, 0);
//   border: var(--darkGreen) solid 1px;
//   border-radius: 10px;
// }
.resultsContainer {
  display: grid;
  grid-template-columns: 2fr 8fr;
  margin-top: 1em;
  background: #2c2a2a;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #707070;
}

.resultsButtonName {
  background: url("../assets/singleLabel.svg") no-repeat;
  background-size: 70%;
  background-position: center;
  p {
    padding: 10px;
    text-align: center;
    color: var(--brightWhite);
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
