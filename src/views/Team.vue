<template>
  <div>
    <section id="executive-board" class="grey-bg">
      <div class="container">
        <h2>{{ leaderHead }}</h2>
        <p v-if="isDesktop" class="feature-text">
          Our lineup that empowers, enlightens, and nurtures people around the
          world.
        </p>
        <h4>Executive Board</h4>
        <div class="row justify-content-center">
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Harvey Sison"
            image="harvey.png"
            fb="harveymile"
            link="harveyjaysison"
            git="Hjkun77"
          >
            President &
            <br />Chief Exective Officer
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Audrey Picar"
            image="audrey.jpg"
            fb="audrey.picar"
            git="audreypicar"
            link="audreypicar"
          >Chief Operations Officer</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Franz Taborlupa"
            image="franz.jpg"
            fb="franz.taborlupa.9"
            link="franztaborlupa"
            git="Znarfois"
          >Chief Technology Officer</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Cedric Atienza"
            image="ceej.jpg"
            fb="cj.atienza.611"
            link="cedricatienza"
          >Chief Communications Officer</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Jethro Sia"
            image="jethro.jpg"
            fb="jethsia"
            link="jethrocullensia"
            git="JethSia"
          >
            Chief Finance &
            <br />Externals Officer
          </team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Polly Baterna"
            image="polly.jpg"
            link="mpmbaterna"
            fb="pollybaterna"
          >
            Chief Human
            <br />Resources Officer
          </team-circle>
        </div>
      </div>
    </section>

    <div id="departments">
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
              class="col-12 col-sm-12 col-md-4"
              name="Allyn Pagatayan"
              image="al.jpg"
            >Lead Secretariat</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Marion Macalalag"
              image="marion.jpg"
            >Events Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Paolo Fuentes"
              image="pao.jpg"
            >Events Lead</team-circle>
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
              class="col-12 col-sm-12 col-md-4"
              name="Tanzell Go"
              image="tanzell.jpg"
            >Web Engineering Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Rhed Atienza "
              image="rhed.jpg"
            >Mobile Engineering Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Jared de Guzman"
              image="jared.jpg"
            >AI Engineering Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Giddy Garcia"
              image="giddy.jpg"
            >Cloud Engineering Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Rafa Dytoc"
              image="rafa.jpg"
            >UX/UI Design Lead</team-circle>
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
          <div class="row"></div>
        </div>
      </section>
    </div>

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
        <div class="row"></div>
      </div>
    </section>

    <section id="join" class="grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h2>Join our community!</h2>
            <p>
              Be part of the Developer Students Club Loyola circle where we
              create impact together!
            </p>
            <a
              href="https://www.facebook.com/groups/233919568000712/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="green">Join us</button>
            </a>
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
        backgroundImage:
          "url(" + require("@/assets/images/human-resources.png") + ")"
      },
      create: {
        backgroundImage:
          "url(" + require("@/assets/images/communications.png") + ")"
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
#executive-board {
  margin-top: 60px;
}

#executive-board h2,
#executive-board h4 {
  text-align: center;
}

#executive-board h4 {
  margin: 48px 0 0;
  /* color: #0f9d58; */
}

#operations h4 {
  color: #ea4335;
}

#technology h4 {
  color: #0f9d58;
}

#community h4 {
  color: #4285f4;
}

#creatives h4 {
  color: #fbbc04;
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

  #executive-board h2 {
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
