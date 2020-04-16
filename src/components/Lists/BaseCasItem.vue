<template>
  <div class="BASECASCONTAINER">
    <div class="cautionBox">
      <div :class="messageType">
        <p>{{ results.message }}</p>
      </div>
      <div class="cautionDesc">
        <p>{{ results.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCasItem",
  props: ["results"],
  computed: {
    messageType: function() {
      return this.results.messageType + "Name";
    },
  },
};
</script>

<style lang="scss" scoped>
.BASECASCONTAINER {
  width: 100%;
  height: 4em;
  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
}
.cautionBox {
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 100%;
}
.cautionName {
  background: black;
  color: var(--cautionText);
  width: 80%;
  text-align: center;
  justify-self: center;
  align-self: center;
  line-height: 1.9;
}
.cautionDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
}
.warningName {
  background: black;
  color: red;
  width: 80%;
  text-align: center;
  justify-self: center;
  align-self: center;
  line-height: 1.7;
}
.warningDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
}
</style>
