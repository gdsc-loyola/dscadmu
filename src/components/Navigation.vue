<template>
  <nav>
    <div class="row f-center f-between">
      <div id="nav-brand" class="col-12 col-md-6">
        <router-link to="/">
          <img
            alt="Developer Student Clubs Loyola logo"
            src="@/assets/images/logo.svg"
          />
        </router-link>
      </div>
      <ul
        v-if="isDesktop"
        id="desktop-nav"
        class="col-12 col-md-6 d-flex f-end"
      >
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
    <div v-if="!isDesktop" id="mobile-nav">
      <ul class="d-flex f-even">
        <li>
          <router-link to="/">
            <i class="material-icons">dashboard</i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <i class="material-icons">info</i>
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/events">
            <i class="material-icons">event</i>
            <span>Events</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <i class="material-icons">rounded_corner</i>
            <span>Projects</span>
          </router-link>
        </li>
        <li>
          <router-link to="/team">
            <i class="material-icons">people</i>
            <span>Team</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth
    };
  },
  computed: {
    isDesktop() {
      if (this.width < 768) return false;
      return true;
    }
  },
  created() {
    window.onresize = () => {
      this.width = window.innerWidth;
    };
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
  box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 16px 32px;
}

/* Desktop Nav */

ul {
  list-style: none;
  letter-spacing: 0.02em;
}

#desktop-nav li {
  margin-left: 30px;
}

#desktop-nav li > a {
  color: #151522;
  font-size: 14px;
  font-weight: 500;
}

#desktop-nav li > a:hover,
#desktop-nav li > a.router-link-active {
  padding-bottom: 18px;
}

#desktop-nav li:nth-child(1) > a:hover,
#desktop-nav li:nth-child(1) > a.router-link-active {
  border-bottom: 4px solid #4285f4;
}

#desktop-nav li:nth-child(2) > a:hover,
#desktop-nav li:nth-child(2) > a.router-link-active {
  border-bottom: 4px solid #ea4335;
}

#desktop-nav li:nth-child(3) > a:hover,
#desktop-nav li:nth-child(3) > a.router-link-active {
  border-bottom: 4px solid #fbbc04;
}

#desktop-nav li:nth-child(4) > a:hover,
#desktop-nav li:nth-child(4) > a.router-link-active {
  border-bottom: 4px solid #0f9d58;
}

/* Mobile Nav */

#mobile-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

#mobile-nav > ul {
  margin: 0;
  padding: 12px 0;
}

#mobile-nav li > a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#mobile-nav a > span {
  font-size: 14px;
  font-size: 10px;
  margin-top: 5px;
}

#mobile-nav a > i,
#mobile-nav a > span {
  color: #909090;
}

#mobile-nav li:nth-child(1) > a.router-link-exact-active > i,
#mobile-nav li:nth-child(1) > a.router-link-exact-active > span {
  color: #333;
}

#mobile-nav li:nth-child(2) > a.router-link-active > i,
#mobile-nav li:nth-child(2) > a.router-link-active > span {
  color: #4285f4;
}

#mobile-nav li:nth-child(3) > a.router-link-active > i,
#mobile-nav li:nth-child(3) > a.router-link-active > span {
  color: #ea4335;
}

#mobile-nav li:nth-child(4) > a.router-link-active > i,
#mobile-nav li:nth-child(4) > a.router-link-active > span {
  color: #fbbc04;
}

#mobile-nav li:nth-child(5) > a.router-link-active > i,
#mobile-nav li:nth-child(5) > a.router-link-active > span {
  color: #0f9d58;
}

@media screen and (max-width: 768px) {
  img {
    width: 100%;
  }
}
</style>
