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
  max-width: 215px;
  margin: 0 40px;
}

h3 {
  color: #2f80ed;
  margin: 25px 0 8px;
}

@media screen and (max-width: 767px) {
  div {
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
