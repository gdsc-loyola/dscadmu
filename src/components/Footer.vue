<template>
  <footer>
    <div id="nav">
      <div class="list">
        <h6>About</h6>
        <hr class="blue" />
        <ul>
          <li>Vision</li>
          <li>Mission</li>
          <li>Types of Events</li>
          <li>Google Technologies</li>
        </ul>
      </div>
      <div class="list">
        <h6>Events</h6>
        <hr class="red" />
        <ul>
          <li>Upcoming Events</li>
          <li>Archives</li>
        </ul>
      </div>
      <div class="list">
        <h6>Projects</h6>
        <hr class="yellow" />
        <ul>
          <li>Placeholder</li>
        </ul>
      </div>
      <div class="list">
        <h6>Team</h6>
        <hr class="green" />
        <ul>
          <li>Executive Board</li>
          <li>Departments</li>
          <li>Core Leads</li>
        </ul>
      </div>
    </div>
    <hr />
    <div id="foot">
      <img
        src="../assets/images/logo.svg"
        alt="Developer Student Clubs Loyola logo"
      />
      <small>© 2020 Developer Student Clubs Loyola. All Rights Reserved.</small>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border-top: 1px solid #eaeaea;
  padding: 40px 200px;
}

div {
  display: grid;
  align-items: start;
}

hr {
  border: none;
  height: 1px;
  background-color: #eaeaea;
  color: #eaeaea;
  margin: 30px 0 40px;
}

#nav {
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  gap: 30px 105px;
}

h6 {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  font-weight: 500;
}

.list hr {
  margin: 0 0 20px;
  width: 30px;
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

ul {
  list-style: none;
}

li {
  line-height: 30px;
  font-size: 15px;
}

#foot {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

small {
  justify-self: end;
  align-self: center;
  font-size: 14px;
  color: #828282;
}
</style>
