<template>
  <section id="wip" class="grey-bg">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-6 left">
          <h4>Oh no!</h4>
          <h1>Page Not Found</h1>
          <p class="feature-text">
            Looks like the page is gone!
            <br />Either the link is broken or the page <br />has already been
            removed!
          </p>
        </div>
        <div class="col-12 col-md-6 right">
          <img src="../assets/images/err.svg" alt="DSC mascot cog" />
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

#wip .left {
  max-width: 410px;
}

#wip .right {
  position: relative;
  top: 60px;
  max-width: 400px;
}

#wip img {
  width: 100%;
}

@media screen and (max-width: 767px) {
  #wip h4 {
    margin-top: 24px;
  }
}
</style>
