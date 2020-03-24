<template>
  <div>
    <img
      :src="require('@/assets/images/' + image + '')"
      alt="DSC Chapter photo"
    />
    <h6>{{ title }}</h6>
    <p>{{ location }}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "location"]
};
</script>

<style scoped>
div {
  flex: 0 0 auto;
  margin: 0 26px;
  width: 192px;
  text-align: center;
}

img {
  margin-bottom: 24px;
  width: 100%;
  border-radius: 100%;
}

h6 {
  line-height: 25px;
  margin-bottom: 4px;
}
</style>
