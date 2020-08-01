<template>
  <div>
    <section class="featured">
      <div class="scroll-indicator">
        <div class="circle1"></div>
        <div class="circle2"></div>
      </div>
      <featured-project
        v-for="project in featured"
        :key="project[1].name"
        :name="project[1].name"
        :image="project[1].image[0].id"
        :description="project[1].description"
        :contributors="project[1].contributors"
      ></featured-project>
    </section>
    <section class="library">
      <div class="library-header">
        <h2>Project Library</h2>
        <p>Lorem ipsum dolor sit amet consectetur ad Lorem, ipsum dolor</p>
      </div>
      <div class="library-content">
        <project-card
          v-for="project in unfeatured"
          :key="project[1].name"
          :name="project[1].name"
          :image="project[1].image[0].id"
          :description="project[1].description"
          :likes="project[1].likes"
          :views="project[1].views"
        ></project-card>
      </div>
    </section>
    <section class="services">
      <div class="services-header">
        <h1>Tech Services</h1>
        <p>Check out different services DSC Loyola offers to its clients.</p>
        <a href="#" class="download-btn">Download primer</a>
      </div>
      <div class="services-content">
        <div class="service">
          <h3 class="service-name">UX/UI Research and Design</h3>
          <p class="service-description">
            We offer research services to help clients identify and understand
            the behaviors, needs, and motivations of their users, customers, and
            stakeholders.
          </p>
          <div class="sub-services">
            <h5>Design Consultancy</h5>
            <h5>User Research</h5>
            <h5>Product Design</h5>
          </div>
        </div>
        <div class="service">
          <h3 class="service-name">Full Stack Mobile App Development</h3>
          <p class="service-description">
            We offer services that aims to help leverage mobile technologies for
            personal or business use through the use of the Flutter framework.
          </p>
          <div class="sub-services">
            <h5>Project Consultancy</h5>
            <h5>Development</h5>
            <h5>Maintenance</h5>
          </div>
        </div>
        <div class="service">
          <h3 class="service-name">Data Science and Analysis</h3>
          <p class="service-description">
            We offer services that involves the analysis, querying and
            visualization of data.
          </p>
          <div class="sub-services">
            <h5>Date Consultancy</h5>
            <h5>Data Query Analytics</h5>
            <h5>Data Visualization</h5>
          </div>
        </div>
        <div class="service">
          <h3 class="service-name">The Cloud</h3>
          <p class="service-description">
            We offer hosting and domain services for websites, databases,
            applications, and servers.
          </p>
          <div class="sub-services">
            <h5>Cloud Consultancy</h5>
            <h5>Hosting</h5>
            <h5>Maintenance</h5>
          </div>
        </div>
        <div class="service">
          <h3 class="service-name">Full Stack Web Development</h3>
          <p class="service-description">
            We offer services from building simple static websites that render
            constant webpages to dynamic websites that provide a depth of
            interactivity through webpages that change its content upon user
            interaction.
          </p>
          <div class="sub-services">
            <h5>Web Consultancy</h5>
            <h5>Development</h5>
            <h5>Maintenance</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import { app } from "../main";

export default {
  async created() {
    app.content
      .get({
        schemaKey: "projectPage",
        populate: [
          {
            field: "name"
          },
          {
            field: "description"
          },
          {
            field: "views"
          },
          {
            field: "likes"
          },
          {
            field: "image"
          },
          {
            field: "featured"
          },
          {
            field: "contributors"
          }
        ]
      })
      .then(projectPage => {
        this.projectPage = projectPage;
        console.log(this.projectPage);
        Object.entries(projectPage).map(item => {
          if(item[1].featured === false){
            this.unfeatured.push(item);
          } else {
            this.featured.push(item);
          }
        });
        console.log(this.unfeatured);
        console.log(this.featured);
      })
      .catch(error => console.log(error));
  },
  components: {
    ProjectCard,
    FeaturedProject
  },
  data() {
    return {
      unfeatured: [],
      featured: []
    };
  }
};
</script>

<style scoped>
.featured {
  padding: 0;
  margin-top: 60px;
  overflow: hidden;
  background-color: #fffbf2;
}

.scroll-indicator {
  position: absolute;
  display: none;
  justify-content: flex-end;
  width: 95vw;
  padding: 50px 0;
  z-index: 1;
  box-sizing: border-box;
}

.circle1 {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #fbbc04;
  margin-right: 5px;
}

.circle2 {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: rgba(251, 188, 4, 0.25);
  margin-right: 30px;
}

.library {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10% 4%;
}

.library-header {
  margin: 70px 0 50px;
}

.library-header h2 {
  font-weight: bold;
  font-size: 31.25px;
  line-height: 40px;
  text-align: center;
  color: #333333;
  text-align: center;
}

.library-header p {
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #333333;
  text-align: center;
}

.library-content {
  display: flex;
  flex-wrap: wrap;
}

.services {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10% 4%;
  background-color: #f8f8f8;
}

.services-header {
  margin: 70px 0 50px;
}

.services-header h1 {
  font-weight: bold;
  font-size: 31.25px;
  line-height: 40px;
  color: #333333;
}

.services-header p {
  font-size: 20px;
  line-height: 25px;
  color: #333333;
  margin-top: 10px;
}

.download-btn {
  float: right;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #333333;
  padding: 11px 27px;
  margin-top: -50px;
  border: 2px solid #333333;
  box-sizing: border-box;
  border-radius: 4px;
}

.download-btn:hover {
  color: #f8f8f8;
  background-color: #333333;
}

.services-content {
  display: flex;
  flex-wrap: wrap;
}

.service {
  width: 49%;
  background-color: white;
  margin-bottom: 2%;
  padding: 20px;
}

.service:nth-child(odd) {
  margin-right: 2%;
}

.service-name {
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #333333;
}

.service-description {
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin: 15px 0;
}

.sub-services {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.sub-services h5 {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  padding: 7px 14px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
}

.service:nth-child(1) h5 {
  color: rgba(234, 67, 53, 0.8);
  background: rgba(234, 67, 53, 0.15);
}

.service:nth-child(2) h5 {
  color: rgba(15, 157, 88, 0.8);
  background: rgba(15, 157, 88, 0.15);
}

.service:nth-child(3) h5 {
  color: rgba(234, 175, 3, 0.8);
  background: rgba(251, 188, 4, 0.15);
}

.service:nth-child(4) h5 {
  color: rgba(213, 121, 45, 0.8);
  background: rgba(213, 121, 45, 0.15);
}

.service:nth-child(5) h5 {
  color: rgba(66, 133, 244, 0.8);
  background: rgba(66, 133, 244, 0.15);
}

@media screen and (max-width: 1100px) {

  .scroll-indicator {
    display: flex;
  }

  .library {
    padding: 0 5% 4%;
  }

  .library-content {
    justify-content: space-around;
  }

  .project {
    width: 45%;
  }

  .project:nth-child(3n-1) {
    margin-left: 0;
    margin-right: 0;
  }

  .services {
    padding: 0 5% 4%;
  }
}

@media screen and (max-width: 990px) {
  .services-header h1,
  .services-header p {
    text-align: center;
  }

  .services-header a {
    display: none;
  }

  .services-content {
    justify-content: space-around;
  }

  .service {
    width: 90%;
  }

  .service:nth-child(odd) {
    margin-right: 0;
  }
}

@media screen and (max-width: 770px) {
  .project {
    width: 60%;
  }
}

@media screen and (max-width: 650px) {
  .project {
    width: 80%;
  }
}

@media screen and (max-width: 450px) {
  .project {
    width: 90%;
  }

  .project img {
    object-fit: contain;
  }

  .services-header p {
    font-size: 12px;
  }

  .service-name {
    font-size: 15px;
  }

  .service-description {
    font-size: 12px;
    line-height: 15px;
  }

  .sub-services h5 {
    font-size: 12px;
  }
}
</style>
