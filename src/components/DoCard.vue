<template>
  <div id="card">
    <div id="cover-img" :class="color">
      <img
        :src="require('@/assets/images/' + image + '')"
        :alt="title + ' image'"
      />
    </div>
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "color"]
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  line-height: 22px;
  max-width: 225px;
}

h3 {
  margin: 25px 0 8px;
}

#cover-img {
  width: 100%;
  height: auto;
  display: flex;
  padding: 42px;
  margin: 0;
  border-radius: 4px;
}

#cover-img img {
  width: 100%;
  opacity: 1 !important;
}

@media screen and (max-width: 768px) {
  div {
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
}

.blue {
  background-color: rgba(66, 133, 244, 0.5);
}

.red {
  background: rgba(234, 67, 53, 0.5);
}

.yellow {
  background: rgba(251, 188, 4, 0.5);
}

.green {
  background: rgba(15, 157, 88, 0.5);
}
</style>
