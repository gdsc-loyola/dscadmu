<template>
  <div id="container">
    <div>
      <h1>Finishing the code soon</h1>
      <p>
        Developer Student Clubs, a program under the Google Developers, is an
        international community of students from various chapters who share a
        common interest in technology. Google brought DSC to Southeast Asia last
        year. Now, it's coming to the Philippines!
      </p>
      <social-icons color="white"></social-icons>
    </div>
  </div>
</template>

<script>
import SocialIcons from "../components/SocialIcons.vue";

export default {
  components: {
    SocialIcons
  }
};
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(21, 21, 34, 0.6),
      rgba(21, 21, 34, 0.6)
    ),
    url("../assets/images/under-construction.png") no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  padding: 0 200px;
}

#container div {
  position: absolute;
  width: 700px;
  bottom: 96px;
}

h1 {
  color: #fff;
}

p {
  margin: 16px 0 85px;
  color: #fff;
  line-height: 20px;
  font-weight: 400;
}
</style>
