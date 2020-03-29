<template>
  <div>
    <h3>More to<br />come<br />soon!</h3>
    <img src="@/assets/images/event/soon.svg" alt="DSC mascot" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  flex: 0 0 auto;
  width: 320px;
  height: 320px;
  border-radius: 4px;
  margin-left: 24px;
  overflow: hidden;
  background: #e0e0e0;
  position: relative;
}

h3 {
  font-weight: 600;
  margin: 24px 0 0 32px;
}

img {
  position: absolute;
  right: 0;
  top: 35px;
  height: calc(100% - 60px);
}

@media screen and (max-width: 767px) {
  div {
    width: 224px;
    height: 224px;
    margin-right: 8px;
  }

  img {
    position: absolute;
    right: 0;
    top: 34px;
    height: calc(100% - 60px);
  }
}
</style>
