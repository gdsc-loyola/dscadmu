<template>
  <div id="team-circle">
    <div id="image">
      <img :src="img" :alt="name" />
    </div>
    <div id="text">
      <h6>{{ name }}</h6>
      <p>
        <slot>Position</slot>
      </p>
      <div class="social">
        <a :href="facebook" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook" v-if="facebook"></i>
        </a>
        <a :href="linkedin" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin" v-if="linkedin"></i>
        </a>
        <a :href="github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github" v-if="github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { app } from "../main";
export default {
  props: ["name", "image", "facebook", "linkedin", "github"],
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
  data() {
    return {
      img: null
    };
  }
};
</script>

<style scoped>
#team-circle {
  margin: 30px 0 0 0;
  width: 200px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#image {
  width: 200px;
}

img {
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
}

h6 {
  margin: 24px 0 4px;
}

p {
  line-height: 20px;
  margin-bottom: 16px;
}

.social {
  width: 102px;
  display: flex;
  justify-content: space-evenly;
}

i.fa-facebook {
  color: #1977f3;
}

i.fa-linkedin {
  color: #0966c2;
}

i.fa-github {
  color: #333;
}

@media screen and (max-width: 767px) {
  #team-circle {
    margin-top: 24px;
    padding: 0 17px;
    flex-direction: row;
    text-align: left;
  }

  #image {
    width: 96px;
  }

  #text {
    align-items: flex-start;
    margin-left: 16px;
    width: 170px;
  }

  .social {
    width: 88px;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
