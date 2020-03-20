<template>
  <div>
    <section id="hero" class="grey-bg">
      <div class="feature-text">
        <h1>Uplifting Communities Through Technology</h1>
        <p>
          Developer Student Clubs, a program under the Google Developers, is an
          international community of students from various chapters who shares a
          common interest in technology.
        </p>
        <button class="blue">Lorem Ipsum</button>
      </div>
      <div class="feature-image">
        <img src="@/assets/images/feature-image.svg" alt="Feature image" />
      </div>
    </section>
    <section id="mission">
      <h2>Our Mission</h2>
      <div id="missions-list">
        <div class="mission-card">
          <img src="@/assets/images/empower.svg" alt="Empower image" />
          <h3>Empower</h3>
          <p>We empower people through technology and programming education</p>
        </div>
        <div class="mission-card">
          <img src="@/assets/images/enlighten.svg" alt="Enlighten image" />
          <h3>Enlighten</h3>
          <p>
            We enlighten people to the power of innovation and problem-solving
          </p>
        </div>
        <div class="mission-card">
          <img src="../assets/images/social-care.svg" alt="Nurture image" />
          <h3>Nurture</h3>
          <p>
            We nurture people to create meaningful technological solutions for
            the community
          </p>
        </div>
      </div>
      <button class="blue-light">Learn More</button>
    </section>
    <section id="projects" class="grey-bg">
      <h2>Events and Projects</h2>
      <h4>Featured Events</h4>
      <div class="rectangle-list">
        <div class="rectangle-card">
          <div class="inner-img">
            <img src="" alt="event photo" />
          </div>
          <div class="inner-text">
            <h5>TechFest</h5>
            <p id="event-date">January 1, 2020 - January 7, 2020</p>
            <p id="event-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut
              consequat semper viverra nam libero justo laoreet.
            </p>
          </div>
        </div>
        <div class="rectangle-card">
          <div class="inner-img">
            <img src="" alt="event photo" />
          </div>
          <div class="inner-text">
            <h5>DSC Week</h5>
            <p id="event-date">January 1, 2020 - January 7, 2020</p>
            <p id="event-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut
              consequat semper viverra nam libero justo laoreet.
            </p>
          </div>
        </div>
        <div class="rectangle-card">
          <div class="inner-img">
            <img src="" alt="event photo" />
          </div>
          <div class="inner-text">
            <h5>Solution Challenge</h5>
            <p id="event-date">January 1, 2020 - January 7, 2020</p>
            <p id="event-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              nulla pellentesque dignissim enim sit amet venenatis urna. Ac ut
              consequat semper viverra nam libero justo laoreet.
            </p>
          </div>
        </div>
      </div>
      <h4>Projects</h4>
      <div class="square-list">
        <router-link to="/"
          ><div class="square-card">
            <img src="@/assets/images/proj-1.png" alt="Project 1" />
            <div><p>Showcase Solution Challenge Projects</p></div>
          </div></router-link
        >
        <router-link to="/"
          ><div class="square-card">
            <img src="@/assets/images/proj-2.png" alt="Project 2" />
            <div><p>Qwiklabs Finishers</p></div>
          </div></router-link
        >
        <router-link to="/"
          ><div class="square-card">
            <img src="@/assets/images/proj-3.png" alt="Project 3" />
            <div><p>DSC AdMU Search</p></div>
          </div></router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  padding: 0 120px;
  align-items: center;
}

h2 {
  font-weight: normal;
  font-size: 36px;
}

#hero {
  justify-content: space-between;
}

.feature-text h1 {
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  max-width: 500px;
}

.feature-text p {
  line-height: 35px;
  margin: 40px 0;
  max-width: 600px;
}

#mission,
#projects {
  flex-direction: column;
  justify-content: center;
}

#missions-list {
  padding: 90px 0;
  display: flex;
}

.mission-card {
  padding: 0 120px;
}

.mission-card h3 {
  font-size: 30px;
  color: #2f80ed;
  margin: 10px 0 35px;
}

.mission-card p {
  line-height: 35px;
}

#projects {
  width: 100%;
  padding: 100px 0 200px;
}

#projects h4 {
  margin-top: 80px;
  color: #2f80ed;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;
}

.rectangle-list {
  padding: 0 200px;
}

.rectangle-card {
  display: flex;
  margin-top: 40px;
  background: #fff;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
}

.rectangle-card .inner-img {
  min-width: 400px;
  max-width: 400px;
  height: 300px;
}

.rectangle-card .inner-img img {
  width: 100%;
}

.rectangle-card .inner-text {
  padding: 40px 60px;
}

.rectangle-card .inner-text h5 {
  font-size: 24px;
  color: #2f80ed;
  font-weight: 500;
}

.inner-text #event-date {
  font-size: 16px;
  margin-top: 10px;
  color: #828282;
}

.inner-text #event-description {
  line-height: 30px;
  margin-top: 25px;
}

.square-list {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 400px);
}

.square-card {
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 2px 4px 2px #e0e0e0;
}

.square-card img {
  width: 100%;
}

.square-card p {
  position: relative;
  height: calc(95px - 40px);
  bottom: 95px;
  background: rgba(47, 128, 237, 0.9);
  backdrop-filter: blur(4px);
  padding: 20px;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
</style>
