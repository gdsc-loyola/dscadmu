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
          >
            Chief Community Development Officer
            <br />& Co-Founder
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4 col-lg"
            name="Cedric Atienza"
            image="person.png"
            >Chief Creatives Officer</team-circle
          >
        </div>
      </div>
    </section>

    <section id="operations" class="department" :style="ops">
      <div class="container">
        <h4>Departments</h4>
        <h2>Operations</h2>
        <p>
          Oversees and ensures all operations are executed efficiently. They are
          responsible for cultivating member happiness, growth, and culture, as
          well as making the organization sustainable by executing financial
          strategies and enhancing external relations. Operations department is
          also responsible for ensuring the events and initiatives are well
          delivered and successful.
        </p>
      </div>
    </section>
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

    <section id="technology" class="department" :style="tech">
      <div class="container">
        <h4>Departments</h4>
        <h2>Technology</h2>
        <p>
          Oversees all technological and innovation aspects brought about in the
          organization. They are responsible for learning and training each
          member of the organization, as well as non-DSC members. They shall
          manage creation of technological solutions to uplift partnered
          communities.
        </p>
      </div>
    </section>
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

    <section id="community" class="department" :style="comm">
      <div class="container">
        <h4>Departments</h4>
        <h2>Community Development</h2>
        <p>
          Oversees external relations with local community partners. This
          includes, but is not limited to, handling primary communication
          between the organization and its partners, creating and overseeing
          formal agreements, and managing the organization’s relationship with
          its partners.
        </p>
      </div>
    </section>
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

    <section id="creatives" class="department" :style="create">
      <div class="container">
        <h4>Departments</h4>
        <h2>Creatives</h2>
        <p>
          Oversees the growth of each member’s creativity, as well as all other
          creative work done in the organization. They are responsible for
          establishing the art direction of a project, developing marketing
          strategies, and translating these ideas into creative campaigns for
          the organization’s various projects.
        </p>
      </div>
    </section>
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
      leaderHead:
        window.innerWidth >= 768 ? "Meet our leadership team" : "Meet our team",
      ops: {
        backgroundImage:
          "url(" + require("@/assets/images/operations.png") + ")"
      },
      tech: {
        backgroundImage: "url(" + require("@/assets/images/tech.png") + ")"
      },
      comm: {
        backgroundImage: "url(" + require("@/assets/images/community.png") + ")"
      },
      create: {
        backgroundImage: "url(" + require("@/assets/images/creatives.png") + ")"
      }
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

#operations h4 {
  color: #4285f4;
}

#technology h4 {
  color: #ea4335;
}

#community h4 {
  color: #fbbc04;
}

#creatives h4 {
  color: #0f9d58;
}

#operations,
#technology,
#community,
#creatives {
  background-size: cover;
  background-position: center;
}

.department {
  height: 305px;
}

.department h2 {
  margin: 8px 0 16px;
  font-weight: 500;
}

.department p {
  line-height: 24px;
}

.department h2,
.department p {
  color: #fff;
}

#join p {
  margin-bottom: 40px;
  line-height: 25px;
}

@media screen and (max-width: 767px) {
  #operations,
  #technology,
  #community,
  #creatives {
    padding: 40px 0;
  }

  #leader h2 {
    text-align: left;
  }

  .department {
    height: 464px;
  }
}

@media screen and (min-width: 992px) {
  .col-lg-2-4 {
    flex: 0 1 20%;
    max-width: 20%;
  }
}
</style>
