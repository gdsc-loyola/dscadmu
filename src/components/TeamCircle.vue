<template>
  <div id="team-circle">
    <div>
      <img :src="require('@/assets/images/team/' + image + '')" :alt="name" />
    </div>
    <div>
      <h6>{{ name }}</h6>
      <p>
        <slot>Position</slot>
      </p>
      <div class="social">
        <a :href="'https://fb.com/' + fb">
          <i class="fab fa-facebook"></i>
        </a>
        <a :href="'https://www.linkedin.com/in/' + link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="'https://github.com/' + git">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "fb", "link", "git"]
};
</script>

<style scoped>
#team-circle {
  margin: 0 32px;
  width: 160px;
  text-align: center;
}

img {
  max-width: 100%;
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
  width: 100%;
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
</style>
