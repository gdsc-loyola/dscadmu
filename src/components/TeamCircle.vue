<template>
  <div id="team-circle">
    <div id="image">
      <img :src="require('@/assets/images/team/' + image + '')" :alt="name" />
    </div>
    <div id="text">
      <h6>{{ name }}</h6>
      <p>
        <slot>Position</slot>
      </p>
      <div class="social">
        <a :href="facebook">
          <i
            class="fab fa-facebook"
            :class="{ disabled: facebook === null }"
          ></i>
        </a>
        <a :href="linkedin">
          <i
            class="fab fa-linkedin"
            :class="{ disabled: linkedin === null }"
          ></i>
        </a>
        <a :href="github">
          <i class="fab fa-github" :class="{ disabled: github === null }"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.onresize = this.handleResize;
  },
  props: ["name", "image", "fb", "link", "git"],
  data() {
    return {
      facebook: this.fb ? "https://fb.com/" + this.fb : null,
      linkedin: this.link ? "https://www.linkedin.com/in/" + this.link : null,
      github: this.git ? "https://github.com/" + this.git : null
    };
  },
  methods: {
    handleResize() {}
  }
};
</script>

<style scoped>
#team-circle {
  margin-top: 32px;
  width: 160px;
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
  width: 160px;
}

img {
  width: 100%;
  border-radius: 100%;
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

.disabled {
  opacity: 0.5;
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
