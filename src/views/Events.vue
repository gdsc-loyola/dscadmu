<template>
  <div>
    <SlickCarousel :arrows="false" :dots="true">
      <featured-event
        image="feature.png"
        title="Tech at Home 2020"
        datetime="April 21, 2020 to May 21, 2020"
        location="Google Meet & Youtube Live"
      >
        <p>Tech at Home is a student-led online technology seminar series that teaches new technologies, especially Google technologies to a wide and diverse audience. It will be composed of various hands-on workshops and speaker engagements from esteemed professionals in the field of technology. The topics will range from data science, cloud engineering, web and mobile development and other tech-related advocacy topics. This event was crafted in light of the enhanced community quarantine (ECQ) and the desire of students and professionals to learn new skills during the pandemic.</p>
      </featured-event>
      <!-- <featured-event
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
      </featured-event>-->
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
            >Firebase in Action: Actions on Google and DialogFlow</event-card>
            <event-card
              image="building-a-serverless.png"
              type="study-jam"
              @click.native="modalOpen(1)"
            >Firebase in Action: Building a Serverless Web App using Firebase</event-card>
            <event-card
              image="firebase-web.png"
              type="study-jam"
              @click.native="modalOpen(2)"
            >Firebase in Action: Firebase Web</event-card>
            <event-card image="baseline.png" type="study-jam" @click.native="modalOpen(3)">
              Baseline: Deploy and
              <br />Develop
            </event-card>
            <event-card image="bigquery.jpg" type="study-jam" @click.native="modalOpen(4)">
              BigQuery Basics for
              <br />Data Analysts
            </event-card>
            <event-card
              image="aiml.jpg"
              type="study-jam"
              @click.native="modalOpen(5)"
            >Baseline: Data, ML, and AI</event-card>
            <event-card image="gcp.jpg" type="study-jam" @click.native="modalOpen(6)">GCP Essentials</event-card>
            <coming-event></coming-event>
          </div>
        </div>

        <h2>Hands-on Workshops</h2>
        <p>Opportunity for community members to learn something new in tech</p>
        <div class="list">
          <div class="scroll" v-dragscroll>
            <margin :width="width"></margin>
            <event-card image="python.jpg" type="workshop" @click.native="modalOpen(7)">
              Pandas, Numpy, and
              <br />Matplotlib Workshop
            </event-card>
            <event-card image="mobile-dev.png" type="workshop" @click.native="modalOpen(8)">
              Mobile Development
              <br />Workshop with Flutter PH
            </event-card>
            <event-card
              image="pandas.png"
              type="workshop"
              @click.native="modalOpen(9)"
            >Python Workshop</event-card>
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
              image="google-tech.png"
              type="speaker-session"
              @click.native="modalOpen(11)"
            >
              DSC Loyola General Assembly 2019
              <br />
            </event-card>
            <event-card
              image="dsc-info.jpg"
              type="speaker-session"
              @click.native="modalOpen(12)"
            >DSC Info Session 2019</event-card>
            <event-card
              image="info-session.png"
              type="speaker-session"
              @click.native="modalOpen(13)"
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
          title: "Firebase in Action: Actions on Google and DialogFlow",
          description:
            "This is the third and final workshop we have for Firebase February. Here we did Qwiklabs Lab called Google Assistant: Build an Application with Dialogflow and Cloud Functions. It was pretty interesting and a lot of students enjoyed it. We taught Google Assistant how to do a trivia game which was pretty fun to do.",
          datetime: "February 26, 2020",
          location: "Ateneo de Manila University",
          participants: "36",
          female: "5"
        },
        {
          type: "Study Jams",
          title:
            "Firebase in Action: Building a Serverless Web App using Firebase",
          description:
            "This is our second workshop for Firebase February. Here in this event we delved into firebase by doing Qwiklab's hands-on-workshop called Building a Serverless Web app using Firebase. Here we taught students the basics of firebase and created a serverless web app to help them visualize what they can build with firebase.",
          datetime: "February 19, 2020",
          location: "Ateneo de Manila University",
          participants: "15",
          female: "3"
        },
        {
          type: "Study Jams",
          title: "Firebase in Action: Firebase Web",
          description:
            "This is the first ever Firebase February Workshop wherein we accomplished the Qwiklab's hands-on tutorial called Firebase Web. Here, together with the participants, we were able to get a grasps of what firebase can do and create a real-time messaging web application.",
          datetime: "February 19, 2020",
          location: "Ateneo de Manila University",
          participants: "15",
          female: "3"
        },
        {
          type: "Study Jams",
          title: "Baseline: Deploy and Develop",
          description:
            "DSC Loyola conducted its last Cloud Study Jam for the year 2019! We conducted the Baseline: Deploy & Develop so that students would know how to connect and deploy their existing projects to the Google Cloud Platform.",
          datetime: "November 28, 2019",
          location: "Ateneo de Manila University",
          participants: "15",
          female: "7"
        },
        {
          type: "Study Jams",
          title: "BigQuery Basics for Data Analysts",
          description:
            "DSC Loyola hosted its 3rd Cloud Study Jams for the November 2019 and we taught BigQuery Basics for Data Analyst. We did the SQL course and the hands-on-lab on create a BigQuery Slides Presentation. This is to show the members how exciting is BigQuery and up to what extent can it do. We hope to host more BigQuery workshops in the future.",
          datetime: "November 25, 2019",
          location: "Ateneo de Manila University",
          participants: "3",
          female: "1"
        },
        {
          type: "Study Jams",
          title: "Baseline: Data, ML, and AI & Neural Networks",
          description:
            "DSC Loyola conducted another Cloud Study Jams wherein we taught attendees how they can use the Google Cloud Platform for Data, Machine Learning and Artificial Intelligence. We did our best to finish the quest however due to technical difficulties, we transitioned to introduction to Neural Networks because students were interested in it.",
          datetime: "November 11, 2019",
          location: "Ateneo de Manila University",
          participants: "21",
          female: "6"
        },
        {
          type: "Study Jams",
          title: "GCP Essentials",
          description:
            "DSC Loyola hosted its first ever Cloud Study Jams on GCP Essentials. Here we did 60% of the quest so that they can do the other 40% at home. In this event, we gave can overview of the Google Cloud Platform like what features are available in GCP. Also, we shared professional and personal projects that are already hosted in GCP to the students so that we get their attention and curiousity.",
          datetime: "November 6, 2019",
          location: "Ateneo de Manila University",
          participants: "31",
          female: "11"
        },
        {
          type: "Hands-on Workshops",
          title: "Pandas, Numpy, and Matplotlib Workshop",
          description:
            "DSC Loyola is officially having its first event of the new decade: Pandas, Numpy, and Matplotlib Workshop! Learn more about visualizing data in Python from our very own Chief Technology Officer, Franz Louis Cesista. We used numpy and matplotlib to visualize statistical models and model the coronavirus for pandas.",
          datetime: "January 29, 2020",
          location: "Ateneo de Manila University",
          participants: "30",
          female: "5"
        },
        {
          type: "Hands-on Workshops",
          title: "Mobile Development Workshop with Flutter PH",
          description:
            "You might have heard of Android Development with Android Studio but you might not know there's another way of building mobile apps that is hybrid. This means you can export it to Google Play and App Store. This hybrid is what we call Flutter. DSC Loyola hosts a Mobile Development Workshop with Flutter Philippines wherein Joshua and Oliver discussed about Flutter and thought us basics Flutter Development.",
          datetime: "November 20, 2019",
          location: "Ateneo de Manila University",
          participants: "40",
          female: "10"
        },
        {
          type: "Hands-on Workshops",
          title: "Python Workshop",
          description:
            "In under 3 hours, DSC Loyola provided a hands-on workshop to teach its members and also non-dsc members to learn how to program in Python. We thought them about variable types, functions, lists and loops. We also shared Python projects that the DSC co-founders built",
          datetime: "November 4, 2019",
          location: "Ateneo de Manila University",
          participants: "30",
          female: "12"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Solution Challenge Info Session and Design Day",
          description:
            "Global Solutions Challenge is an international competition which invites members of DSC chapters all around the globe to develop solutions for local community problems. With that, DSC Loyola hosted a 2-in-1 workshop for the Solution Challenge wherein we shared what is Solutions Challenge all about and at the same time hosted a Design Sprint workshop to help participants in their projects.",
          datetime: "February 13, 2020",
          location: "Ateneo de Manila University",
          participants: "10",
          female: "1"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "DSC Loyola General Assembly 2019",
          description:
            "General Assembly is an info session caterred for registered members of the organization. We are happy to announce that DSC Loyola's opening was magnificent because we have a total 300+ registered members. Here in the general assembly, we pitched what is Developer Student Clubs and what benefits they get by joining the organization. We also discussed to them the mission and vision of the organization and invited them to be part of the core team. We discussed also our upcoming events and the projects they can expect with us.",
          datetime: "October 28, 2019",
          location: "Ateneo de Manila University",
          participants: "69",
          female: "16"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "DSC Info Session 2019",
          description:
            "DSC Info session was catered not just for members of the organization but also open to other students interested in joining DSC. In this event, we pitched to them who we are and what we offer as an organization. We also had an ice breaker where they have to guess a Google tech through charades and also the attendees pitched possible solutionarian projects they want to work on	",
          datetime: "October 3, 2019",
          location: "Ateneo de Manila University",
          participants: "17",
          female: "4"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Introduction to Google Technologies",
          description:
            "Did you know? Google Technologies such as Android Development, Angular and many more are not taught inside the Ateneo de Manila University. That is why as an organization powered by Google Developers, DSC Loyola's first ever event is to educate students on what Google Technologies that are available as of the moment. This is to help them explore and as well you these stacks in their personal projects and maybe in their academics such as their thesis.",
          datetime: "August 3, 2019",
          location: "Ateneo de Manila University",
          participants: "18",
          female: "3"
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
