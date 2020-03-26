<template>
  <section id="wip" class="grey-bg">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h4>Oh no!</h4>
          <h1>Page Not Found</h1>
          <p class="feature-text">
            Looks like the page is gone!
            <br />Either the link is broken or the page <br />has already been
            removed!
          </p>
        </div>
        <div class="col-12 col-md-6 feature-image">
          <img src="../assets/images/err.svg" alt="DSC mascot wrench" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
#wip {
  margin-top: 60px;
  width: 100%;
}

#wip h1 {
  margin-bottom: 16px;
}

#wip h4 {
  color: #ea4335;
  margin-top: 96px;
  margin-bottom: 24px;
}

#wip .feature-image {
  position: relative;
  top: 60px;
}
</style>
