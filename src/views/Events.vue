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
    <section id="events" class="grey-bg">
      <div class="container">
        <h2>Study Jams</h2>
        <p>Community-run study groups for developers</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card
              image="firebase-in-action.png"
              type="study-jam"
              @click.native="modalOpen(0)"
              >Firebase in Action</event-card
            >
            <event-card
              image="building-a-serverless.png"
              type="study-jam"
              @click.native="modalOpen(1)"
            >
              Building a Serverless Web
              <br />App using Firebase
            </event-card>
            <event-card
              image="firebase-web.png"
              type="study-jam"
              @click.native="modalOpen(2)"
              >Firebase Web</event-card
            >
            <event-card
              image="baseline.png"
              type="study-jam"
              @click.native="modalOpen(3)"
            >
              Baseline: Deploy and
              <br />Develop
            </event-card>
            <event-card
              image="firebase-in-action.png"
              type="study-jam"
              @click.native="modalOpen(4)"
            >
              BigQuery Basics for
              <br />Data Analysts
            </event-card>
            <event-card
              image="firebase-in-action.png"
              type="study-jam"
              @click.native="modalOpen(5)"
              >Baseline: Data, ML, and AI</event-card
            >
            <event-card
              image="firebase-in-action.png"
              type="study-jam"
              @click.native="modalOpen(6)"
              >GCP Essentials</event-card
            >
            <coming-event></coming-event>
          </div>
        </div>

        <h2>Hands-on Workshops</h2>
        <p>Opportunity for community members to learn something new in tech</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card
              image="pandas.png"
              type="workshop"
              @click.native="modalOpen(7)"
            >
              Pandas, Numpy, and
              <br />Matplotlib Workshop
            </event-card>
            <event-card
              image="mobile-dev.png"
              type="workshop"
              @click.native="modalOpen(8)"
            >
              Mobile Development
              <br />Workshop with Flutter PH
            </event-card>
            <event-card
              image="python.png"
              type="workshop"
              @click.native="modalOpen(9)"
              >Python Workshop</event-card
            >
            <coming-event></coming-event>
          </div>
        </div>

        <h2>Speaker Session & Tech Talk</h2>
        <p>Community-run study groups for developers</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card
              image="solution-challenge.png"
              type="speaker-session"
              @click.native="modalOpen(10)"
            >
              Solution Challenge Info
              <br />Session and Design Day
            </event-card>
            <event-card
              image="info-session.png"
              type="speaker-session"
              @click.native="modalOpen(11)"
              >DSC Info Session 2019</event-card
            >
            <event-card
              image="google-tech.png"
              type="speaker-session"
              @click.native="modalOpen(12)"
            >
              Introduction to
              <br />Google Technologies
            </event-card>
            <coming-event></coming-event>
          </div>
        </div>
      </div>
    </section>
    <modal :info="info[event]" />
  </div>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";
import ComingEvent from "@/components/ComingEvent";
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
    ComingEvent,
    Modal
  },
  data() {
    return {
      width: window.innerWidth >= 768 ? 64 : 24,
      event: 0,
      info: [
        {
          type: "Study Jams",
          title: "Firebase in Action",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "April 18, 2020, 8 AM - 5 PM",
          location: "Ateneo de Manila University",
          participants: "36",
          female: "5"
        },
        {
          type: "Study Jams",
          title: "Building a Serverless Web App using Firebase",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Study Jams",
          title: "Firebase Web",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Study Jams",
          title: "Baseline: Deploy and Develop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Study Jams",
          title: "BigQuery Basics for Data Analysts",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Study Jams",
          title: "Baseline: Data, ML, and AI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Study Jams",
          title: "GCP Essentials",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Hands-on Workshops",
          title: "Pandas, Numpy, and Matplotlib Workshop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Hands-on Workshops",
          title: "Mobile Development Workshop with Flutter PH",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Hands-on Workshops",
          title: "Python Workshop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Solution Challenge Info Session and Design Day",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "DSC Info Session 2019",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Introduction to Google Technologies",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          datetime: "N/A",
          location: "Ateneo de Manila University",
          participants: "N/A",
          female: "N/A"
        }
      ]
    };
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.width = 24;
      } else this.width = 64;
    },
    modalOpen(eventId) {
      this.event = eventId;
      this.$modal.show("event");
    }
  }
};
</script>

<style scoped>
#events {
  padding-bottom: calc(60px - 48px);
}

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
