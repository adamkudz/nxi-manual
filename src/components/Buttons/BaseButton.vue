<template>
  <div>
    <div>
      <p>{{ button.name }}</p>
      <div class="labelLight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["button"],
  methods: {}
};
</script>

<style lang="scss"></style>
