<template>
  <div class="pageTitle">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.pageTitle {
  font-family: var(--daysFont);
  font-size: 1.1em;
  color: var(--lightWhite);
  text-align: center;
}
</style>
