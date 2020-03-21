<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer
  }
  // computed: {
  //   showFooter() {
  //     if (this.$route.path != "/") return false;
  //     return true;
  //   }
  // }
};
</script>

<style>
@font-face {
  font-family: "Google Sans";
  src: url("./assets/fonts/googlesans-regular.woff") format("woff");
  font-weight: normal;
}

@font-face {
  font-family: "Google Sans";
  src: url("./assets/fonts/googlesans-medium.woff") format("woff");
  font-style: normal;
  font-weight: 500;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Google Sans", Helvetica, Arial, sans-serif;
  letter-spacing: 0.02em;
  font-size: 1rem;
  text-decoration: none;
  color: #4f4f4f;
}

body {
  width: 100%;
}

section {
  padding-top: 65px;
  padding-bottom: 65px;
  padding-left: 200px;
  padding-right: 200px;
}

h1 {
  font-size: 2.25rem;
  line-height: 50px;
  font-weight: 500;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.25rem;
  line-height: 32px;
  font-weight: 500;
  color: #333;
}

h4 {
  text-transform: uppercase;
  color: #4285f4;
  letter-spacing: 0.1rem;
  line-height: 25px;
  font-weight: 600;
}

button {
  border-radius: 4px;
  padding: 15px 30px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4f4f4f;
  font-weight: normal;
}

.grey-bg {
  background: #f2f2f2;
}

.feature-text {
  font-size: 1.125rem;
  line-height: 28px;
}

.blue {
  background: #2f80ed;
  color: #fff;
}

.blue:hover {
  background: rgb(44, 123, 226);
}

.blue-light {
  background: #fff;
  border: 2px solid #2f80ed;
  color: #2f80ed;
}

.blue-light:hover {
  background: #2f80ed;
}

.white {
  background: #fff;
  color: #4285f4;
}

.white:hover {
  background: rgb(243, 243, 243);
}

.white-light {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.white-light:hover {
  background: #fff;
  color: transparent;
}
</style>
