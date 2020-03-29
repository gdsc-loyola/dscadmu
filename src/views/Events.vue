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
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card
              image="firebase-in-action.png"
              type="study-jam"
              v-on:click.native="modalOpen"
            >Firebase in Action</event-card>
            <event-card image="building-a-serverless.png" type="study-jam">
              Building a Serverless Web
              <br />App using Firebase
            </event-card>
            <event-card image="firebase-web.png" type="study-jam">Firebase Web</event-card>
            <event-card image="baseline.png" type="study-jam">
              Baseline: Deploy and
              <br />Develop
            </event-card>
            <event-card image="firebase-in-action.png" type="study-jam">
              BigQuery Basics for
              <br />Data Analysts
            </event-card>
            <event-card image="firebase-in-action.png" type="study-jam">Baseline: Data, ML, and AI</event-card>
            <event-card image="firebase-in-action.png" type="study-jam">GCP Essentials</event-card>
          </div>
        </div>

        <h2>Hands-on Workshops</h2>
        <p>Opportunity for community members to learn something new in tech</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card image="pandas.png" type="workshop">
              Pandas, Numpy, and
              <br />Matplotlib Workshop
            </event-card>
            <event-card image="mobile-dev.png" type="workshop">
              Mobile Development
              <br />Workshop with Flutter PH
            </event-card>
            <event-card image="python.png" type="workshop">Python Workshop</event-card>
          </div>
        </div>

        <h2>Speaker Session & Tech Talk</h2>
        <p>Community-run study groups for developers</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card image="solution-challenge.png" type="speaker-session">
              Solution Challenge Info
              <br />Session and Design Day
            </event-card>
            <event-card image="info-session.png" type="speaker-session">DSC Info Session 2019</event-card>
            <event-card image="google-tech.png" type="speaker-session">
              Introduction to
              <br />Google Technologies
            </event-card>
          </div>
        </div>
      </div>
    </section>
    <modal
      type="Study Jams"
      title="Firebase in Action"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      datetime="April 18, 2020, 8 AM - 5 PM"
      location="Ateneo de Manila University"
      participants="36"
      female="5"
    />
  </div>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";
import Margin from "@/components/Margin";
import Modal from "@/components/Modal";

export default {
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    SlickCarousel,
    FeaturedEvent,
    EventCard,
    Margin,
    Modal
  },
  data() {
    return {
      width: window.innerWidth >= 768 ? 64 : 24
    };
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.width = 24;
      } else this.width = 64;
    },
    modalOpen() {
      this.$modal.show("hello-world");
    },
    modalClose() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style scoped>
div.slick-slider {
  margin-top: 60px;
}

.list {
  width: 100vw;
  position: relative;
  left: 49%;
  right: 49%;
  margin: 48px -50vw;
  overflow: hidden;
}

.scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
}

@media screen and (max-width: 767px) {
  .list {
    margin-top: 24px;
  }
}
</style>
