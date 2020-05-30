<template>
  <div>
    <section id="questions" class="container">
      <h2>Questions?</h2>
      <p>Contact us through our social media accounts</p>
      <social-icons color="black"></social-icons>
      <p>
        Or email us at
        <a href="mailto:dsc.ateneo@gmail.com">dsc.ateneo@gmail.com</a>.
      </p>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="list col-12 col-md-6 col-lg-3">
            <h6>About</h6>
            <hr class="blue" />
            <ul>
              <li>
                <router-link to="/about#vision">Vision</router-link>
              </li>
              <li>
                <router-link to="/about#mission">Mission</router-link>
              </li>
              <li>
                <router-link to="/about#event">Types of Events</router-link>
              </li>
              <li>
                <router-link to="/about#tech">Google Technologies</router-link>
              </li>
            </ul>
          </div>
          <div class="list col-12 col-md-6 col-lg-3">
            <h6>Events</h6>
            <hr class="red" />
            <ul>
              <li>
                <router-link to="/events#featured">Featured Events</router-link>
              </li>
              <li>
                <router-link to="/events#study-jams">Study Jams</router-link>
              </li>
              <li>
                <router-link to="/events#hands-on-workshops"
                  >Hands-on Workshops</router-link
                >
              </li>
              <li>
                <router-link to="/events#tech-talks">Tech Talks</router-link>
              </li>
            </ul>
          </div>
          <div class="list col-12 col-md-6 col-lg-3">
            <h6>Projects</h6>
            <hr class="yellow" />
            <ul>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
            </ul>
          </div>
          <div class="list col-12 col-md-6 col-lg-3">
            <h6>Team</h6>
            <hr class="green" />
            <ul>
              <li>
                <router-link to="/team#executive-board"
                  >Executive Board</router-link
                >
              </li>
              <li>
                <router-link to="/team#departments">Departments</router-link>
              </li>
              <li>
                <router-link to="/team#join">Join Us</router-link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-md-6">
            <router-link to="/">
              <img
                src="../assets/images/logo.svg"
                alt="Developer Student Clubs Loyola logo"
              />
            </router-link>
          </div>
          <div class="col-12 col-md-6">
            <small>
              © 2020 Developer Student Clubs Loyola. All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SocialIcons from "./SocialIcons";

export default {
  components: {
    SocialIcons
  }
};
</script>

<style scoped>
footer {
  padding: 40px 32px;
  border-top: 1px solid #eaeaea;
}

#questions {
  flex-direction: column;
  text-align: left;
}

#questions a {
  color: #4285f4;
}

h6 {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  font-weight: 500;
}

ul {
  list-style: none;
}

li > a {
  line-height: 30px;
  font-size: 15px;
}

small {
  font-size: 14px;
  color: #828282;
}

hr {
  border: none;
  height: 1px;
  background-color: #eaeaea;
  color: #eaeaea;
  margin: 20px 0 40px;
}

.list {
  padding-top: 10px;
  padding-bottom: 10px;
}

.list hr {
  margin: 0 0 20px;
  width: 30px;
}

.row:last-child div:last-child {
  text-align: right;
}

@media screen and (max-width: 767px) {
  footer {
    padding-bottom: 100px;
  }

  footer,
  .row:last-child div:last-child,
  .row:last-child div {
    text-align: center;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  #questions {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  footer > div.container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .list hr {
    margin: 0 auto 20px;
  }
}

.blue {
  border-bottom: 2px solid #4285f4;
}

.red {
  border-bottom: 2px solid #ea4335;
}

.yellow {
  border-bottom: 2px solid #fbbc04;
}

.green {
  border-bottom: 2px solid #0f9d58;
}
</style>
