<template>
  <div id="event-wrap">
    <div id="event-card" :style="backgroundImage">
      <h3>
        <slot></slot>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      backgroundImage: {
        backgroundImage:
          "linear-gradient(0deg, rgba(24, 54, 103, 0.6), rgba(24, 54, 103, 0.6)), url(" +
          require("@/assets/images/" + this.image + "") +
          ")",
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style scoped>
div#event-wrap {
  margin: 15px 0;
}

div#event-card {
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

h3 {
  font-weight: 500;
  color: #fff;
}

@media screen and (max-width: 767px) {
  div#event-wrap {
    margin: 8px 0;
  }

  div#event-card {
    height: 96px;
  }

  h3 {
    font-size: 14px;
    line-height: 18px;
    padding: 25px;
  }
}
</style>
