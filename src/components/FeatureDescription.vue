<template>
  <div class="FEATUREDESCRIPTIONCONTAINER">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Feature Description",
  props: ["description"]
};
</script>

<style lang="scss" scoped>
.FEATUREDESCRIPTIONCONTAINER {
  height: 100%;
  width: 100%;
}
</style>