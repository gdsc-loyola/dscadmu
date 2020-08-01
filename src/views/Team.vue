<template>
  <div>
    <section id="executive-board" class="grey-bg">
      <div class="container">
        <h2>{{ teamPage.title }}</h2>
        <p class="feature-text">{{ teamPage.description }}</p>
        <h4>Executive Board</h4>
        <div class="row justify-content-center">
          <team-circle
            v-for="board in teamPage.executiveBoard"
            :key="board.name"
            class="col-12 col-sm-12 col-md-4"
            :name="board.name"
            :image="board.image[0].image[0].path"
            :facebook="board.facebook"
            :linkedin="board.linkedin"
            :github="board.github"
            >{{ board.position }}</team-circle
          >
        </div>
      </div>
    </section>

    <department
      v-for="department in teamPage.departments"
      :key="department.name"
      :name="department.name"
      :image="department.image[0].image[0].path"
      :description="department.description"
      :color="department.color"
      :leads="department.leads"
    ></department>

    <section id="join" class="grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h2>{{ teamPage.joinSection.title }}</h2>
            <p>{{ teamPage.joinSection.description }}</p>
            <a
              :href="teamPage.joinSection.link"
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
import Department from "@/components/Department";
import { app } from "../main";

export default {
  async created() {
    app.content
      .get({
        schemaKey: "teamPage",
        populate: [
          {
            field: "title"
          },
          {
            field: "description"
          },
          {
            field: "executiveBoard",
            fields: [
              "name",
              "position",
              "image",
              "facebook",
              "github",
              "linkedin"
            ]
          },
          {
            field: "departments",
            fields: ["name", "image", "description", "color", "leads"]
          },
          {
            field: "joinSection"
          }
        ]
      })
      .then(teamPage => {
        this.teamPage = teamPage;
        console.log(this.teamPage.joinSection.title);
      })
      .catch(error => console.log(error));
  },
  components: {
    TeamCircle,
    Department
  },
  data() {
    return {
      teamPage: []
    };
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

#join p {
  margin-bottom: 40px;
  line-height: 25px;
}

.feature-text {
  text-align: center;
}
@media screen and (max-width: 767px) {
  #executive-board h2 {
    text-align: left;
  }

  .feature-text {
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
