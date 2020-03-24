<template>
  <section id="wip" class="grey-bg">
    <div class="container">
      <h4>Oh no!</h4>
      <h1>Page Not Found</h1>
      <p class="feature-text">
        Looks like the page is gone! Either the link is broken or the page has
        already been removed!
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
  color: #ea4335;
}
</style>
