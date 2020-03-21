<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>
div {
  box-shadow: 2px 4px 2px #e0e0e0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
