<template>
  <div>
    <SlickCarousel :arrows="false" :dots="true">
      <div>1</div>
      <div>2</div>
    </SlickCarousel>
    <section class="grey-bg">
      <div class="container">
        <h2>Study Jams</h2>
        <p>Community-run study groups for developers</p>
        <div></div>

        <h2>Hands-on Workshops</h2>
        <p>Opportunity for community members to learn something new in tech</p>
        <div></div>

        <h2>Speaker Session & Tech Talk</h2>
        <p>Community-run study groups for developers</p>
        <div></div>
      </div>
    </section>
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

h2 {
  margin-top: 64px;
}
</style>
