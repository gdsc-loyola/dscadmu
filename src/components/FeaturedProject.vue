<template>
    <div class="featured-scroll" v-dragscroll.x v-on:dragscrollmove="move($event.detail.deltaX)">
        <div class="featured-content">
          <h5>FEATURED</h5>
          <h1 class="featured-name">{{ name }}</h1>
          <p class="description">
            {{ description }}
          </p>
          <div class="contributors">
            Contributors:
            <div v-for="contributor in contributors" :key="contributor">{{ contributor.contributor }} </div>
          </div>
          <div class="buttons">
            <a href="#" class="visit-btn">Visit site</a>
            <a href="#" class="read-btn">Read Article</a>
          </div>
        </div>
        <div class="featured-pic">
          <img :src="img" :alt="name" />
        </div>
    </div>
</template>

<script>
import { app } from "../main";
export default {
  props: ["name", "image", "description", "contributors"],
  created() {
    app.storage
      .getURL({
        fileId: this.image
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
  },
  methods: {
    move: function(scroll) {
      const featureScroll = document.querySelector(".featured-scroll");
      const circle1 = document.querySelector(".circle1");
      const circle2 = document.querySelector(".circle2");
      if (scroll > 5) {
        featureScroll.style.left = "-100vw";
        circle2.style.backgroundColor = "#FBBC04";
        circle1.style.backgroundColor = "rgba(251, 188, 4, 0.25)";
      } else if (scroll < -5) {
        featureScroll.style.left = "0";
        circle1.style.backgroundColor = "#FBBC04";
        circle2.style.backgroundColor = "rgba(251, 188, 4, 0.25)";
      }
    }
  }
};
</script>

<style scoped>

.featured-scroll {
  position: relative;
  display: flex;
  width: 100vw;
  padding: 0;
  background-color: #fffbf2;
}

.featured-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8%;
  padding-bottom: 50px;
}

.featured-content h5 {
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.1em;
  color: #fbbc04;
  margin-top: 30px;
}

.featured-name {
  font-weight: 500;
  font-size: 31.25px;
  line-height: 40px;
  color: #333333;
  margin: 10px 0;
}

.description {
  font-size: 16px;
  line-height: 24px;
  color: #333333;
}

.contributors {
  display: flex;
  font-weight: bold;
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  margin: 5px 0;
}

.contributors div {
  font-weight: normal;
  text-decoration: underline;
  margin: 0 2px;
}

.buttons {
  margin: 30px 0;
}

.visit-btn {
  display: none;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #ffffff;
  padding: 16px 22px;
  background-color: #fbbc04;
  border: 1px solid #fbbc04;
  border-radius: 4px;
}

.visit-btn:hover {
  color: #fbbc04;
  background-color: #ffffff;
}

.read-btn {
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #333333;
  padding: 15px 21px;
  border: 2px solid #333333;
  box-sizing: border-box;
  border-radius: 4px;
  /* margin-left: 16px; */
}

.read-btn:hover {
  color: #ffffff;
  background-color: #333333;
}

.featured-pic {
  display: flex;
  justify-content: center;
  width: 100vw;
}

.featured-pic img {
  align-self: flex-end;
  width: 100%;
}

@media screen and (max-width: 1100px) {

  .featured-scroll {
    align-items: center;
  }

  .featured-content {
    min-width: 100%;
    padding: 0 30px 20px;
    margin: 0;
    box-sizing: border-box;
  }

  .featured-content h5 {
    margin-top: 50px;
  }

  .featured-pic {
    min-width: 100%;
    align-self: flex-end;
  }
}

</style>