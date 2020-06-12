<template>
  <div>
    <section class="department" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
      <div class="container">
        <h4 v-bind:style="{ color: color }">Departments</h4>
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <team-circle
            v-for="lead in leads"
            :key="lead.name"
            class="col-12 col-sm-12 col-md-4"
            :name="lead.name"
            :image="lead.image[0].image[0].path"
            :facebook="lead.facebook"
            :linkedin="lead.linkedin"
            :github="lead.github"
          >{{ lead.position }}</team-circle>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TeamCircle from "./TeamCircle";
import { app } from "../main";
export default {
  props: ["name", "image", "description", "leads", "color"],
  created() {
    app.storage
      .getURL({
        fileId: this.image.split("/")[1]
      })
      .then(image => {
        this.img = image;
      })
      .catch(error => console.log(error));
  },
  components: {
    TeamCircle
  },
  data() {
    return {
      img: null
    };
  }
};
</script>
<style scoped>
/* #operations h4 {
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
} */

.department {
  height: 305px;
  background-size: cover;
  background-position: center;
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

@media screen and (max-width: 767px) {
  .department {
    padding: 40px 0;
    height: 464px;
  }
}
</style>
