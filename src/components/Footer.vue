<template>
  <footer>
    <div class="left">
      <img src="@/assets/images/logo.svg" alt="DSC logo" />
      <p>
        Developer Student Clubs, a program under the Google Developers, is an
        international community of students from various chapters who shares a
        common interest in technology.
      </p>
      <div class="social-icons">
        <a href="#"
          ><img src="@/assets/images/facebook.svg" alt="Facebook link"
        /></a>
        <a href="#"
          ><img src="@/assets/images/twitter.svg" alt="Twitter link"
        /></a>
        <a href="#"
          ><img src="@/assets/images/instagram.svg" alt="Instagram link"
        /></a>
      </div>
    </div>
    <div class="right">
      <div id="about">
        <h4>About</h4>
        <hr />
        <ul>
          <li>Vision</li>
          <li>Mission</li>
          <li>Executive Board</li>
          <li>Department Structure</li>
        </ul>
      </div>
      <div id="event">
        <h4>Events</h4>
        <hr />
        <ul>
          <li>Featured Events</li>
        </ul>
      </div>
      <div id="chapters">
        <h4>Chapters</h4>
        <hr />
        <ul>
          <li>DSC Chapters</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #fff;
  padding: 50px 120px 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  flex: 0 1 600px;
}

.left p {
  padding: 25px 0;
  line-height: 35px;
}

.left .social-icons {
  display: flex;
}

.social-icons a {
  border: 2px solid #2f80ed;
  border-radius: 100px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 50px;
}

.right {
  display: flex;
}

.right div {
  margin-right: 100x;
}

.right h4 {
  font-weight: 500;
}

.right hr {
  width: 30px;
  margin: 15px 0 20px;
  border: none;
  height: 2px;
  background: #2f80ed;
}

ul {
  list-style: none;
  line-height: 30px;
}

#about,
#event {
  margin-right: 65px;
}
</style>
