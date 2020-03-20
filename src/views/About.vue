<template>
  <div>
    <section id="hero" class="grey-bg">
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
    </section>
    <section id="mission">
      <h2>Our mission</h2>
      <div id="mission-list">
        <mission-card image="empower.svg" title="Empower">
          We empower people through technology and programming education
        </mission-card>
        <mission-card image="enlighten.svg" title="Enlighten">
          We enlighten people to the power of innovation and problem-solving
        </mission-card>
        <mission-card image="social-care.svg" title="Nurture">
          We nurture people to create meaningful technological solutions for the
          community
        </mission-card>
      </div>
    </section>
    <section id="events" class="grey-bg">
      <h2>Types of events</h2>
      <p>Various events to empower, enlighten, and nurture members</p>
      <div class="event-list">
        <event-card></event-card>
      </div>
    </section>
    <section id="tech">
      <h2>Google Technologies</h2>
      <p>
        We’re building solutions by learning and applying Google’s latest
        technologies.
      </p>
      <div>
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 0 90px;
  padding: 0 200px;
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

#mission {
  padding-bottom: 80px;
  text-align: center;
}

#mission h2 {
  margin-bottom: 50px;
}

#mission-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  justify-content: center;
  align-items: baseline;
  gap: 80px;
}

#events {
  text-align: center;
}

#tech div {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  margin-top: 48px;
  justify-content: center;
  align-items: center;
}
</style>
