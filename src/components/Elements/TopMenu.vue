<template>
  <div class="TOPMENUCONTAINER">
    <p @click="$router.push('/')" id="backButton">Home</p>
    <p @click="$emit('getHelp')" id="helpButton">Help</p>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>

<style lang="scss" scoped>
.TOPMENUCONTAINER {
  width: 100%;
  margin: auto;
  padding-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    color: var(--mainYellow);
    font-family: var(--daysFont);
    font-size: 1.3em;
  }
}
#backButton {
  margin-left: 10%;
}
#helpButton {
  justify-self: end;
  margin-right: 10%;
}
</style>
