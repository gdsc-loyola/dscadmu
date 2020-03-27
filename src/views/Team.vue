<template>
  <div>
    <section id="leader" class="grey-bg">
      <div class="container">
        <h2>Meet our leadership team</h2>
        <p class="feature-text">
          Our lineup that empowers, enlightens, and nurtures people around the
          world.
        </p>
        <h4>Executive Board & Co-Founders</h4>
        <div class="row">
          <team-circle
            name="Harvey Sison"
            fb="harveymile"
            link="harveyjaysison"
            git="Hjkun77"
            image="person.png"
          >
            President/CEO,
            <br />Co-Founder & DSC Lead
          </team-circle>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamCircle from "@/components/TeamCircle";

export default {
  created() {
    window.onresize = this.handleResize;
  },
  components: {
    TeamCircle
  },
  methods: {
    handleResize() {}
  }
};
</script>

<style scoped>
#leader {
  margin-top: 60px;
}

#leader h2,
#leader h4 {
  text-align: center;
}

#leader h4 {
  margin: 48px 0 32px;
  color: #0f9d58;
}
</style>
