<template>
  <div>
    <section id="vision">
      <div id="hero">
        <div class="container">
          <h4>Vision</h4>
          <div class="row align-items-center justify-content-between">
            <div id="hero-text" class="col-12 col-md-6">
              <h1>Uplifting communities through technology</h1>
              <p class="feature-text">
                We are a community of developers that are passionate about
                uplifting communities through technology and innovation.
              </p>
              <!-- <a href="/" target="_blank" rel="noopener noreferrer">
              <button class="blue">Join us</button>
              </a>-->
            </div>
            <div id="hero-image" class="col-12 col-md-6">
              <img
                src="../assets/images/feature-image.svg"
                alt="Feature image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="mission" class="grey-bg">
      <div class="container">
        <h2 class="text-center">Our mission</h2>
        <div class="row justify-content-center">
          <mission-card image="empower.svg" title="Empower"
            >We empower people through technology and programming
            education</mission-card
          >
          <mission-card image="enlighten.svg" title="Enlighten"
            >We enlighten people to the power of innovation and
            problem-solving</mission-card
          >
          <mission-card image="social-care.svg" title="Nurture">
            We nurture people to create meaningful technological solutions for
            the community
          </mission-card>
        </div>
      </div>
    </section>

    <section id="event">
      <div class="container text-center">
        <h2>Types of events</h2>
        <p>Various events to empower, enlighten, and nurture members</p>
        <div class="row">
          <div class="col-6 col-md-6 col-lg-3" to="/">
            <event-category image="study-jams.jpeg">Study Jams</event-category>
          </div>
          <div class="col-6 col-md-6 col-lg-3" to="/">
            <event-category image="workshop.jpeg">
              Hands-on
              <br />Workshops
            </event-category>
          </div>
          <div class="col-6 col-md-6 col-lg-3" to="/">
            <event-category image="exploreml.jpeg">ExploreML</event-category>
          </div>
          <div class="col-6 col-md-6 col-lg-3" to="/">
            <event-category image="hackathon.jpeg">Hackathon</event-category>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-6 col-lg-4" to="/">
            <event-category image="talk.jpeg">Tech Talk</event-category>
          </div>
          <div class="col-6 col-md-6 col-lg-4" to="/">
            <event-category image="bootcamp.jpeg">Bootcamp</event-category>
          </div>
          <div class="col-6 col-md-6 col-lg-4" to="/">
            <event-category image="showcase.jpeg">Showcase</event-category>
          </div>
        </div>
      </div>
    </section>

    <section id="tech" class="grey-bg">
      <div class="container">
        <h2>Google Technologies</h2>
        <p>
          We’re building solutions by learning and applying Google’s latest
          technologies.
        </p>
        <div class="row align-items-center text-center">
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/angular.svg" alt="Angular logo" />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img
              src="../assets/images/google-apps.svg"
              alt="Google Apps logo"
            />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/android.svg" alt="Android logo" />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img
              src="../assets/images/actions-on-google.svg"
              alt="Actions on Google logo"
            />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/dialogflow.svg" alt="Dialogflow logo" />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/tensorflow.svg" alt="TensorFlow logo" />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/flutter.svg" alt="Flutter logo" />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img
              src="../assets/images/google-cloud-platform.svg"
              alt="Google Cloud Platform logo"
            />
          </div>
          <div class="col-4 col-md-4 col-lg">
            <img src="../assets/images/firebase.svg" alt="Firebase logo" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MissionCard from "@/components/MissionCard";
import EventCategory from "@/components/EventCategory";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    MissionCard,
    EventCategory
  }
};
</script>

<style scoped>
#hero {
  margin-top: 60px;
  width: 100%;
}

#hero p {
  padding: 15px 0 40px;
}

#hero img {
  width: 100%;
}

#hero h4 {
  color: #4285f4;
}

#hero-text {
  max-width: 500px;
}

#event p,
#mission h2,
#tech p {
  margin-bottom: 50px;
}

@media screen and (max-width: 767px) {
  #hero p {
    margin-top: 1rem;
  }

  #hero-image {
    order: -1;
  }

  #mission {
    padding-bottom: 20px;
  }

  #event a {
    padding: 0 8px;
  }

  #event p,
  #mission h2,
  #tech p {
    margin-bottom: 24px;
  }

  #tech {
    padding-bottom: 30px;
  }

  #tech .col-lg {
    margin-bottom: 30px;
  }

  #tech h2,
  #tech p {
    text-align: center;
  }

  #tech img {
    width: 100%;
  }
}
</style>
