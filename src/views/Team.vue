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
            The Operations is the internals manager of the organization. The
            department oversees and ensures that the events and initiatives are
            well delivered and successful. Moreover, the operations team is
            in-charge of project management, document organization and legal
            concerns.
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
            The Technology department is a group of passionate students that are
            responsible for the planning, design, and implementation of various
            activities such as Workshops and Client/Internal projects in
            different aspects of software and technology namely: Web Design,
            Mobile App Development, UX/UI, AI, ML, Data Science, and Cloud
            Engineering.
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

      <section id="communications" class="department" :style="comm">
        <div class="container">
          <h4>Departments</h4>
          <h2>Communications</h2>
          <p>
            The Communications Department is in charge of planning, developing,
            and implementing the marketing and communication strategies of the
            organization. The department makes sure that the organization’s
            messages are clearly distributed and communicated through channels
            towards the targeted audience.
          </p>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Ces Ong"
              image="ces.jpg"
            >Creatives & Branding Lead</team-circle>
            <team-circle
              class="col-12 col-sm-12 col-md-4"
              name="Miguel Uygongco"
              image="miguel.jpeg"
            >Promotions Lead</team-circle>
          </div>
        </div>
      </section>
    </div>

    <section id="hr" class="department" :style="hr">
      <div class="container">
        <h4>Departments</h4>
        <h2>Human Resources</h2>
        <p>
          The Human Resources department is the community builder of the
          organization. The department assesses the performances of the members
          and encourages an environment that is collaborative and growth-minded,
          while also strengthening the organization's relationships with
          community partners.
        </p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Bianca Benipayo"
            image="bianca.jpg"
          >External Community Relations Lead</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Allen Chuanico"
            image="allen.jpg"
          >Member Evaluations Lead</team-circle>
        </div>
      </div>
    </section>

    <section id="finance-externals" class="department" :style="finEx">
      <div class="container">
        <h4>Departments</h4>
        <h2>Finance and Externals</h2>
        <p>The Finance and Externals Department is the funding and partnerships arm of DSC Loyola. The department manages the organization's funds making sure there is always enough financial resources for its projects and activities. It also builds strong relationships with various institutions, such as businesses, schools, and organizations.</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Erick Asence"
            image="erick.jpg"
          >Finance Lead</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Mon Lagustan"
            image="mon.jpg"
          >Corporate Relations Lead</team-circle>
          <team-circle
            class="col-12 col-sm-12 col-md-4"
            name="Carl Marcelo"
            image="carl.jpg"
          >External Relations Lead</team-circle>
        </div>
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
      hr: {
        backgroundImage:
          "url(" + require("@/assets/images/human-resources.png") + ")"
      },
      comm: {
        backgroundImage:
          "url(" + require("@/assets/images/communications.png") + ")"
      },
      finEx: {
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

#finance-externals h4 {
  color: #e37400;
}

#operations,
#technology,
#communications,
#hr,
#finance-externals {
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
