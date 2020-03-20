<template>
  <div>
    <img
      :src="require('@/assets/images/' + image + '')"
      :alt="title + ' image'"
    />
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  line-height: 22px;
}

h3 {
  color: #2f80ed;
  margin: 25px 0 8px;
}
</style>
