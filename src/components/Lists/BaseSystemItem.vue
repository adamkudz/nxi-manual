<template>
  <div class="BASESYSTEMCONTAINER">
    <div class="systemBox">
      <div class="systemMessage">
        <p>{{ results.message }}</p>
      </div>
      <div class="messageDesc">
        <p>{{ results.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSystemItem",
  props: ["results"],
  computed: {
    messageType: function() {
      return this.results.messageType + "Name";
    },
  },
};
</script>

<style lang="scss" scoped>
.BASESYSTEMCONTAINER {
  width: 100%;

  background: transparent
    radial-gradient(closest-side at 17% 50%, #a2693c 0%, #1a1008 100%) 0% 0%
    no-repeat padding-box;
  border: 0.5px solid #f2ec3fab;
  border-radius: 10px;
}
.systemBox {
  display: grid;
  grid-template-columns: 4fr 7fr;
  height: 100%;
}
.systemMessage {
  background: black;
  color: var(--lightWhite);

  justify-self: center;
  align-self: center;
  p {
    text-align: center;
    font-style: italic;
  }
}
.messageDesc {
  color: var(--lightWhite);
  justify-self: center;
  align-self: center;
  p {
    margin: 0.5em;
    padding: 1em;
  }
}
</style>
