<template>
  <div>
    <SlickCarousel :arrows="false" :dots="true">
      <div>1</div>
      <div>2</div>
    </SlickCarousel>
  </div>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    SlickCarousel
  }
};
</script>

<style scoped>
div.slick-slider {
  margin-top: 60px;
}
</style>
