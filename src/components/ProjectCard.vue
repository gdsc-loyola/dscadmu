<template>
  <div class="project">
    <img :src="img" class="project-pic" :alt="name" />
    <h5 class="project-name">{{ name }}</h5>
    <p class="project-description">{{ description }}</p>
    <div class="love-view">
      <div class="love">
        <img src="../assets/images/heart-icon.png" class="heart-icon" alt="heart-icon" />
        <p>{{ likes }}</p>
      </div>
      <div class="view">
        <img src="../assets/images/eye-icon.png" class="view-icon" alt="view-icon" />
        <p>{{ views }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { app } from "../main";
export default {
  props: ["name", "image", "description", "likes", "views"],
  created() {
    app.storage
      .getURL({
        fileId: this.image.split("/")[1]
      })
      .then(image => {
        console.log(image);
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
.project {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 40px;
}

.project:nth-child(3n-1) {
  margin-left: 5%;
  margin-right: 5%;
}

.project-name {
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  padding: 5px;
}

.project-description {
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.love-view {
  /* display: flex; */
  display: none;
  margin-top: 7px;
}

.love,
.view {
  display: flex;
  align-items: center;
}

.love {
  margin-right: 20px;
}

.love img,
.view img {
  margin-right: 5px;
}

@media screen and (max-width: 1100px) {
  .project {
    width: 45%;
  }

  .project:nth-child(3n-1) {
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (max-width: 770px) {
  .project {
    width: 60%;
  }
}

@media screen and (max-width: 650px) {
  .project {
    width: 80%;
  }
}

@media screen and (max-width: 450px) {
  .project {
    width: 90%;
  }

  .project img {
    object-fit: contain;
  }
}
</style>
