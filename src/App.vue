<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
@font-face {
  font-family    : 'Google Sans';
  src            : url('./assets/fonts/googlesans-regular.woff') format('woff');
  font-weight    : normal;
  text-rendering : optimizeLegibility;
}

@font-face {
  font-family    : 'Google Sans';
  src            : url('./assets/fonts/googlesans-medium.woff') format('woff');
  font-style     : normal;
  font-weight    : 500;
  text-rendering : optimizeLegibility;
}

@font-face {
  font-family    : 'Google Sans';
  src            : url('./assets/fonts/googlesans-bold.woff') format('woff');
  font-weight    : bold;
  text-rendering : optimizeLegibility;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Google Sans', Helvetica, Arial, sans-serif;
  letter-spacing: 0.02em;
  font-size: 18px;
}

body {
  width: 100%;
}

button {
  border-radius: 6px;
  padding: 15px 20px;
  border: none;
  font-size: 16px;
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

.blue {
  background: #2F80ED;
  color: #fff;
}

.blue:hover {
  background: rgb(44, 123, 226);
}

.blue-light {
  background: #fff;
  border: 1px solid #2F80ED;
  color: #2F80ED;
}

.blue-light:hover {
  background: #2F80ED;
  color: #fff;
}
</style>
