<template>
  <div>
    <SlickCarousel :arrows="false" :dots="true">
      <featured-event
        image="feature.png"
        title="TechFest x ADMU 2020"
        datetime="April 18, 2020, 8 AM - 5 PM"
        location="Ateneo de Manila University"
        buy="/buy"
        learn="/learn"
      >
        <p>
          Techfest 2020 is the Developer Student Clubs’ flagship technology
          conference organized by students. This is a one-day event that aims to
          equip aspiring innovators with much-coveted technological insights to
          aid them in the process of shaping the future they wish to behold. In
          line with this, the event will be addressing 4 of the current hot
          trends in tech: Web and Mobile, Data Science and Cloud, Business in
          Tech, and Women and Students in Tech.
        </p>
      </featured-event>
      <featured-event
        image="feature.png"
        title="TechFest x ADMU 2020"
        datetime="April 18, 2020, 8 AM - 5 PM"
        location="Ateneo de Manila University"
        buy="/buy"
        learn="/learn"
      >
        <p>
          Techfest 2020 is the Developer Student Clubs’ flagship technology
          conference organized by students. This is a one-day event that aims to
          equip aspiring innovators with much-coveted technological insights to
          aid them in the process of shaping the future they wish to behold. In
          line with this, the event will be addressing 4 of the current hot
          trends in tech: Web and Mobile, Data Science and Cloud, Business in
          Tech, and Women and Students in Tech.
        </p>
      </featured-event>
    </SlickCarousel>
    <section class="grey-bg">
      <div class="container">
        <h2>Study Jams</h2>
        <p>Community-run study groups for developers</p>
        <div>
          <event-card></event-card>
        </div>

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
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    SlickCarousel,
    FeaturedEvent,
    EventCard
  }
};
</script>

<style>
div.slick-slider {
  margin-top: 60px;
}
</style>
