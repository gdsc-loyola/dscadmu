<template>
  <div id="card" :style="backgroundImage">
    <div id="title">
      <h6><slot></slot></h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "type"],
  data() {
    return {
      backgroundImage: {
        backgroundImage:
          "url(" +
          require("@/assets/images/event/" +
            this.type +
            "/" +
            this.image +
            "") +
          ")",
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style scoped>
#card {
  flex: 0 0 auto;
  width: 320px;
  height: 320px;
  border-radius: 4px;
  text-align: center;
  margin: 0 24px;
  overflow: hidden;
  cursor: pointer;
}

#title {
  width: 100%;
  height: 80px;
  position: relative;
  top: 240px;
  background: rgba(234, 67, 53, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#title h6 {
  color: #fff;
  font-weight: 400;
}

@media screen and (max-width: 767px) {
  #card {
    width: 224px;
    height: 224px;
    margin: 0 8px;
  }

  #title {
    height: 56px;
    top: 168px;
  }
}
</style>
