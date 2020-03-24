<template>
  <section id="wip" class="grey-bg">
    <div class="container">
      <h4>Oops...</h4>
      <h1>Finishing the code soon</h1>
      <p class="feature-text">
        The page is not yet done but don't worry. Maybe on your next visit, the
        page is already up and working!
      </p>
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

#wip h4 {
  color: #fbbc04;
}
</style>
