<template>
  <nav>
    <div class="container" id="nav">
      <div id="nav-brand">
        <router-link to="/">
          <img alt="Developer Student Clubs Loyola logo" src="@/assets/images/logo.svg" />
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/events">Events</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/team">Team</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.05);
  z-index: 1;
  background: #fff;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

ul {
  list-style: none;
  display: flex;
  letter-spacing: 0.02em;
}

li {
  margin-left: 30px;
}

li > a {
  color: #151522;
  font-size: 14px;
  font-weight: 500;
}

li > a:hover,
li > a.router-link-active {
  padding-bottom: 18px;
}

li:nth-child(1) > a:hover,
li:nth-child(1) > a.router-link-active {
  border-bottom: 4px solid #4285f4;
}

li:nth-child(2) > a:hover,
li:nth-child(2) > a.router-link-active {
  border-bottom: 4px solid #ea4335;
}

li:nth-child(3) > a:hover,
li:nth-child(3) > a.router-link-active {
  border-bottom: 4px solid #fbbc04;
}

li:nth-child(4) > a:hover,
li:nth-child(4) > a.router-link-active {
  border-bottom: 4px solid #0f9d58;
}
</style>
