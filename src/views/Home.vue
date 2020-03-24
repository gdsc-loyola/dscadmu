<template>
  <div>
    <section
      id="hero"
      :style="backgroundHero"
      class="d-flex align-items-center"
    >
      <div class="container">
        <div id="hero-text">
          <h1>Creating impact together</h1>
          <p class="feature-text">
            Developer Student Clubs Loyola is a student organization powered by
            Google Developers that aims to build students’ skills and network by
            giving them access to different technologies, specifically Google
            Developer technologies like Android, Firebase, Angular, Flutter,
            Google Cloud Platform and many more. Together, we learn in a
            peer-to-peer learning environment and build solutions for the
            community.
          </p>
          <div>
            <router-link to="/">
              <button class="blue primary">Join us</button>
            </router-link>
            <router-link to="/">
              <button class="white-light">Learn more</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="contain">
        <h2 class="text-center">What we do</h2>
      </div>
    </section>

    <section id="next" :style="backgroundNext">
      <div class="container">
        <h2>What's coming next?</h2>
        <p>Check out the next event of DSC Loyola.</p>
        <div class="row" style="margin: 0">
          <div id="next-event" class="col-12 col-lg-9">
            <h5>TechFest x AdMU 2020</h5>
            <p class="description">
              Techfest 2020 is the Developer Student Clubs’ flagship technology
              conference organized by students. This is a one-day event that
              aims to equip aspiring innovators with much-coveted technological
              insights to aid them in the process of shaping the future they
              wish to behold. In line with this, the event will be addressing 4
              of the current hot trends in tech: Web and Mobile, Data Science
              and Cloud, Business in Tech, and Women and Students in Tech.
            </p>
            <p class="datetime">
              <i class="material-icons">date_range</i>
              <span>April 18, 2020, 8:00 AM - 5:00 PM</span>
            </p>
            <p class="location">
              <i class="material-icons">location_on</i>
              <span>Ateneo de Manila University, Loyola Schools Campus</span>
            </p>
            <router-link to="/">
              <button class="blue">Buy tickets</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="grey-bg">
      <div class="container">
        <h2>Check out other chapters.</h2>
        <p>There are 18 DSC chapters in the Philippines right now!</p>
        <p>Want to start your own chapter? Apply to be a lead now!</p>
        <router-link to="/">
          <button class="blue">Apply as lead</button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      backgroundHero: {
        backgroundImage: "url(" + require("@/assets/images/impact.png") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      backgroundNext: {
        backgroundImage: "url(" + require("@/assets/images/next.png") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    };
  }
};
</script>

<style scoped>
#hero {
  margin-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
}

#hero p {
  padding: 15px 0 40px;
}

#hero-text {
  max-width: 720px;
}

#hero .primary {
  border: 2px solid #2f80ed;
  margin-right: 20px;
}

#hero h1,
#hero p,
#next h2,
#next p {
  color: #fff;
}

#next-event {
  background: #fff;
  border-radius: 4px;
  width: 100%;
  padding: 32px 40px;
  margin-top: 48px;
}

#next-event h5 {
  margin-bottom: 16px;
}

#next-event p {
  color: #4f4f4f;
}

#next-event .description {
  margin-bottom: 25px;
  line-height: 1.5rem;
}

#next-event .datetime,
#next-event .location {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

#next-event i {
  margin-right: 26px;
}

#next-event span {
  padding-top: 5px;
}

#next-event button {
  margin-top: 22px;
}

@media screen and (max-width: 768px) {
  #hero {
    margin-top: 60px;
  }

  #next-event {
    padding: 20px;
    margin-top: 40px;
  }

  #next-event .description {
    line-height: 1.2rem;
  }

  #next-event .datetime,
  #next-event .location {
    margin-bottom: 8px;
    align-items: flex-start;
  }

  #next-event i {
    margin-right: 16px;
  }

  #next-event span {
    padding-top: 0;
  }
}
</style>
