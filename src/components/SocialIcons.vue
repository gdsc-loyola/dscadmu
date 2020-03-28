<template>
  <div id="social-list">
    <a href="#">
      <div class="icon" :class="'i-' + color">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 24">
          <path
            class="fb"
            :class="color"
            d="M13.5 1.2h-3.3c-1.4 0-2.8 0.6-3.8 1.6 -1 1-1.6 2.4-1.6 3.8v3.3H1.6v4.3h3.3v8.7h4.3v-8.7h3.3l1.1-4.3H9.2V6.6c0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h3.3V1.2z"
          />
        </svg>
      </div>
    </a>
    <a href="#">
      <div class="icon" :class="'i-' + color">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
          <path
            class="tw"
            :class="color"
            d="M23 2C22 2.7 21 3.2 19.9 3.5 19.3 2.8 18.5 2.3 17.6 2.1 16.7 1.9 15.7 2 14.9 2.3 14 2.6 13.3 3.2 12.8 4 12.3 4.7 12 5.6 12 6.5V7.5C10.2 7.6 8.5 7.2 6.9 6.4 5.4 5.6 4 4.4 3 3 3 3-1 12 8 16 5.9 17.4 3.5 18.1 1 18 10 23 21 18 21 6.5 21 6.2 21 5.9 20.9 5.7 21.9 4.7 22.7 3.4 23 2V2Z"
          />
        </svg>
      </div>
    </a>
    <a href="#">
      <div class="icon" :class="'i-' + color">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M17 2H7C4.2 2 2 4.2 2 7V17C2 19.8 4.2 22 7 22H17C19.8 22 22 19.8 22 17V7C22 4.2 19.8 2 17 2Z"
            class="ig"
            :class="color"
          />
          <path
            d="M16 11.4C16.1 12.2 16 13.1 15.6 13.8 15.2 14.5 14.6 15.2 13.8 15.5 13.1 15.9 12.2 16 11.4 15.9 10.6 15.8 9.8 15.4 9.2 14.8 8.6 14.2 8.2 13.4 8.1 12.6 8 11.8 8.1 10.9 8.5 10.2 8.8 9.4 9.5 8.8 10.2 8.4 10.9 8 11.8 7.9 12.6 8 13.5 8.1 14.3 8.5 14.9 9.1 15.5 9.7 15.9 10.5 16 11.4Z"
            class="ig"
            :class="color"
            id="ig-circle"
          />
        </svg>
      </div>
    </a>
    <a href="#">
      <div class="icon" :class="'i-' + color">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M16 8C17.6 8 19.1 8.6 20.2 9.8 21.4 10.9 22 12.4 22 14V21H18V14C18 13.5 17.8 13 17.4 12.6 17 12.2 16.5 12 16 12 15.5 12 15 12.2 14.6 12.6 14.2 13 14 13.5 14 14V21H10V14C10 12.4 10.6 10.9 11.8 9.8 12.9 8.6 14.4 8 16 8V8Z"
            class="li"
            :class="color"
          />
          <path d="M6 9H2V21H6V9Z" class="li" :class="color" />
          <path
            d="M4 6C5.1 6 6 5.1 6 4 6 2.9 5.1 2 4 2 2.9 2 2 2.9 2 4 2 5.1 2.9 6 4 6Z"
            class="li"
            :class="color"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["color"]
};
</script>

<style scoped>
#social-list {
  display: flex;
  padding: 32px 0;
}

.icon {
  border-radius: 100%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
}

.icon:hover {
  background: #2f80ed;
  border: none;
  border: 1.5px solid #2f80ed;
}

.icon:hover .fb,
.icon:hover .tw,
.icon:hover .ig,
.icon:hover .li {
  fill: white !important;
  stroke-width: 0;
}

.icon:hover #ig-circle {
  stroke: #2f80ed;
  stroke-width: 3;
}

svg {
  width: 18px;
  height: 18px;
}

.fb {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  fill: none;
}

.tw {
  stroke-linejoin: round;
  stroke-width: 2;
  fill: none;
}

.ig {
  stroke-linejoin: round;
  stroke-width: 2;
  fill: none;
}

.li {
  stroke-linejoin: round;
  stroke-width: 2;
  fill: none;
}

.blue {
  stroke: #2f80ed;
}

.white {
  stroke: #fff;
}

.black {
  stroke: #333;
}

.i-blue {
  border: 1.5px solid #2f80ed;
}

.i-white {
  border: 1.5px solid #fff;
}

.i-black {
  border: 1.5px solid #333;
}
</style>
