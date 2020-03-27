<template>
  <div>
    <section id="leader" class="grey-bg">
      <div class="container">
        <h2>{{ leaderHead }}</h2>
        <p v-if="isDesktop" class="feature-text">
          Our lineup that empowers, enlightens, and nurtures people around the
          world.
        </p>
        <h4>Executive Board & Co-Founders</h4>
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Harvey Sison"
            image="person.png"
            fb="harveymile"
            link="harveyjaysison"
            git="Hjkun77"
          >
            President/CEO,
            <br />Co-Founder & DSC Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Audrey Picar"
            image="person.png"
            >Chief Operations Officer & Co-Founder</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Franz Cesista"
            image="person.png"
            >Chief Technology Officer</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Cobbie Quintos"
            image="person.png"
            >Chief Community Development Officer & Co-Founder</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Cedric Atienza"
            image="person.png"
            >Chief Creatives Officer</team-circle
          >
        </div>
      </div>
    </section>

    <section></section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Marion Macalalag"
            image="person.png"
            >Operations Lead</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Arvin Almario"
            image="person.png"
            >People Lead</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Margaux Arcinas"
            image="person.png"
            >People Lead</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Tanzell Go"
            image="person.png"
            >Events Lead</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Aldrich Tan"
            image="person.png"
            >Events Lead</team-circle
          >
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Jeth Sia"
            image="person.png"
            >Finance & Externals Lead</team-circle
          >
        </div>
      </div>
    </section>

    <section></section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Robin Chua"
            image="person.png"
          >
            Data Science &
            <br />Analytics Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Miggy Pinaroc"
            image="person.png"
          >
            Data Science &
            <br />Analytics Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Jeth Sia"
            image="person.png"
          >
            Data Science &
            <br />Analytics Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Samson Tan"
            image="person.png"
          >
            Internet of Things
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Carlos Aranguren"
            image="person.png"
          >
            Internet of Things
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Nicole Respecia"
            image="person.png"
          >
            Internet of Things
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Giddy Garcia"
            image="person.png"
          >
            Software
            <br />Engineering Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Daniel del Rio"
            image="person.png"
          >
            Software
            <br />Engineering Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Jared de Guzman"
            image="person.png"
          >
            Software
            <br />Engineering Lead
          </team-circle>
        </div>
      </div>
    </section>

    <section></section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Andy Cosio"
            image="person.png"
          >
            Community
            <br />Relations Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Matthew del Rosario"
            image="person.png"
          >
            Community
            <br />Relations Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="John Matthew Reyes"
            image="person.png"
          >
            Community
            <br />Relations Lead
          </team-circle>
        </div>
      </div>
    </section>

    <section></section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Miguel Uygongco"
            image="person.png"
          >
            Social Media
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Rafael Dytoc"
            image="person.png"
          >
            Graphic Design
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Gian Fausto"
            image="person.png"
          >
            Documentations
            <br />Lead
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg-2-4"
            name="Samson Tan"
            image="person.png"
          >
            Photography
            <br />Lead
          </team-circle>
        </div>
      </div>
    </section>

    <section id="join" class="grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h2>Join the team!</h2>
            <p>
              Be part of the Developer Students Club Loyola circle where we
              create impact together!
            </p>
            <button class="green">Join us</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamCircle from "@/components/TeamCircle";

export default {
  created() {
    window.addEventListener("resize", this.handleResizeTeam);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResizeTeam);
  },
  components: {
    TeamCircle
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 768 ? false : true,
      leaderHead: this.isDesktop ? "Meet our leadership team" : "Meet our team"
    };
  },
  methods: {
    handleResizeTeam() {
      if (window.innerWidth < 768) {
        this.isDesktop = true;
        this.leaderHead = "Meet our team";
      } else {
        this.isDesktop = false;
        this.leaderHead = "Meet our leadership team";
      }
    }
  }
};
</script>

<style scoped>
#leader {
  margin-top: 60px;
}

#leader h2,
#leader h4 {
  text-align: center;
}

#leader h4 {
  margin: 48px 0 0;
  color: #0f9d58;
}

#join p {
  margin-bottom: 40px;
  line-height: 25px;
}

@media screen and (max-width: 767px) {
  #leader h2 {
    text-align: left;
  }
}

@media screen and (min-width: 992px) {
  .col-lg-2-4 {
    flex: 0 1 20%;
    max-width: 20%;
  }
}
</style>
