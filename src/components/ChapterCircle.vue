<template>
  <div>
    <img
      :src="require('@/assets/images/chapter/' + image + '')"
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
  text-align: center;
  width: 192px;
  margin: 0 26px;
}

img {
  margin-bottom: 24px;
  max-width: 100%;
  border-radius: 100%;
}

h6 {
  line-height: 25px;
  margin-bottom: 4px;
}

@media screen and (max-width: 767px) {
  div {
    width: 140px;
    margin: 0 20px;
  }

  h6 {
    line-height: 18px;
    margin-bottom: 0;
  }
}
</style>
