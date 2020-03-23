<template>
  <div>
    <section class="grey-bg">
      <div class="container" id="hero">
        <div>
          <h4>Vision</h4>
          <h1>Uplifting communities through technology</h1>
          <p class="feature-text">
            We are a community of developers that are passionate about uplifting
            communities through technology and innovation.
          </p>
          <button class="blue">Join us</button>
        </div>
        <div>
          <img src="../assets/images/feature-image.svg" alt="Feature image" />
        </div>
      </div>
    </section>
    <section id="mission">
      <div class="container">
        <h2 class="text-center">Our mission</h2>
        <div id="mission-list">
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
    <section class="grey-bg">
      <div class="container">
        <h2 class="text-center">Types of events</h2>
        <p class="text-center">
          Various events to empower, enlighten, and nurture members
        </p>
        <div class="event-list">
          <event-card></event-card>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Google Technologies</h2>
        <p>
          We’re building solutions by learning and applying Google’s latest
          technologies.
        </p>
        <div id="tech">
          <img src="../assets/images/angular.svg" alt="Angular logo" />
          <img src="../assets/images/android.svg" alt="Android logo" />
          <img
            src="../assets/images/actions-on-google.svg"
            alt="Actions on Google logo"
          />
          <img src="../assets/images/dialogflow.svg" alt="Dialogflow logo" />
          <img src="../assets/images/google-apps.svg" alt="Google Apps logo" />
          <img src="../assets/images/tensorflow.svg" alt="TensorFlow logo" />
          <img
            src="../assets/images/google-cloud-platform.svg"
            alt="Google Cloud Platform logo"
          />
          <img src="../assets/images/flutter.svg" alt="Flutter logo" />
          <img src="../assets/images/firebase.svg" alt="Firebase logo" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MissionCard from "../components/MissionCard.vue";
import EventCard from "../components/EventCard.vue";

export default {
  components: {
    MissionCard,
    EventCard
  }
};
</script>

<style scoped>
#hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero h4 {
  margin-bottom: 25px;
}

#hero p {
  padding: 15px 0 40px;
}

#hero img {
  width: 100%;
}

#mission h2 {
  margin-bottom: 50px;
}

#mission-list {
  display: flex;
  justify-content: center;
}

#tech {
  display: flex;
  justify-content: center;
  align-items: center;
}

#tech img {
  margin: 30px 16px 0 16px;
}
</style>
