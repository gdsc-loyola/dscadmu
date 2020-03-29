<template>
  <div id="featured" :style="backgroundImage">
    <div class="container">
      <h4>Featured</h4>
      <div class="row">
        <div class="col-12 col-md-8">
          <h2>{{ title }}</h2>
          <slot></slot>
        </div>
        <div class="col-12 col-md-3 offset-md-1">
          <p class="datetime">
            <i class="material-icons">date_range</i>
            <span>{{ this.datetime }}</span>
          </p>
          <p class="location">
            <i class="material-icons">location_on</i>
            <span>{{ this.location }}</span>
          </p>
        </div>
      </div>
      <div class="buttons">
        <router-link :to="buy">
          <button class="red primary">Buy Ticket</button>
        </router-link>
        <router-link :to="learn">
          <button class="white-light">Learn more</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "datetime", "location", "buy", "learn"],
  data() {
    return {
      backgroundImage: {
        backgroundImage:
          "url(" + require("@/assets/images/event/" + this.image + "") + ")",
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style scoped>
#featured {
  height: 478px;
}

#featured > div {
  margin-top: 60px;
}

#featured h2,
#featured p,
#featured i,
#featured span {
  color: #fff;
}

#featured h4 {
  color: #ea4335;
  margin-bottom: 8px;
}

#featured h2 {
  margin-bottom: 16px;
  font-weight: 400;
}

#featured p {
  line-height: 24px;
}

#featured .datetime,
#featured .location {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

#featured i {
  margin-right: 20px;
}

#featured span {
  padding-top: 5px;
}

#featured .buttons {
  margin-top: 40px;
}

#featured .primary {
  border: 2px solid #ea4335;
  margin-right: 20px;
}

@media screen and (max-width: 767px) {
  #featured {
    height: 500px;
  }

  #featured > div {
    margin-top: 32px;
  }

  #featured .datetime,
  #featured .location {
    margin-bottom: 0;
  }

  #featured .buttons {
    margin-top: 20px;
  }
}
</style>
