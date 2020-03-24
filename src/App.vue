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

section {
  padding: 60px 0;
}

h1 {
  font-size: 2.5rem;
  line-height: 50px;
  font-weight: 500;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.375rem;
  line-height: 32px;
  font-weight: 500;
  color: #333;
}

h4 {
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 500;
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
  margin: 0;
  padding: 0;
}

.f-even {
  justify-content: space-evenly;
}

.text-center {
  text-align: center;
}

.grey-bg {
  background: #f2f2f2;
}

.feature-text {
  font-size: 1.125rem;
  line-height: 28px;
}

/* BUTTONS */

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

@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .container {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }
}
</style>
