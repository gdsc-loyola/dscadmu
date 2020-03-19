<template>
  <nav>
    <div id="nav">
      <div id="nav-brand">
        <router-link to="/">
          <img alt="Developer Student Clubs Loyola logo" src="@/assets/images/logo.svg">
        </router-link>
      </div>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/chapters">Chapters</router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  box-shadow: 0 2px 10px 0px rgba(0,0,0,.05);
}

#nav {
  background: #fff;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
}

ul {
  list-style: none;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

li {
  margin-left: 32px;
}

li > a {
  color: #151522;
  text-decoration: none;
}

li > a:hover,
li > a.router-link-active {
  padding-bottom: 31px;
}

li:nth-child(1) > a:hover,
li:nth-child(1) > a.router-link-active {
  border-bottom: 4px solid #4285F4;
}

li:nth-child(2) > a:hover,
li:nth-child(2) > a.router-link-active {
  border-bottom: 4px solid #EA4335;
}

li:nth-child(3) > a:hover,
li:nth-child(3) > a.router-link-active {
  border-bottom: 4px solid #FBBC04;
}

li:nth-child(4) > a:hover,
li:nth-child(4) > a.router-link-active {
  border-bottom: 4px solid #0F9D58;
}
</style>
