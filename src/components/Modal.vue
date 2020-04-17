<template>
  <modal name="event" height="auto" adaptive scrollable>
    <div class="modal">
      <div class="modal-header">
        <h2>{{ info.type }}</h2>
        <div class="close" @click="modalClose">
          <i class="material-icons">close</i>
        </div>
      </div>
      <h1>{{ info.title }}</h1>
      <p>{{ info.description }}</p>
      <div class="modal-wrapper">
        <div class="modal-details">
          <i class="material-icons">date_range</i>
          <p>{{ info.datetime }}</p>
        </div>
        <div class="modal-details">
          <i class="material-icons">group</i>
          <p>{{ info.participants }} participants</p>
        </div>
      </div>
      <div class="modal-wrapper">
        <div class="modal-details">
          <i class="material-icons">location_on</i>
          <p>{{ info.location }}</p>
        </div>
        <div class="modal-details">
          <i class="material-icons">wc</i>
          <p>{{ info.female }} female participants</p>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <div class="scroll" v-dragscroll>
        <margin :width="width"></margin>
        <img
          src="../assets/images/event/study-jam/firebase-in-action.png"
          alt="firebase-in-action"
        />
        <img
          src="../assets/images/event/study-jam/firebase-in-action.png"
          alt="firebase-in-action"
        />
        <img
          src="../assets/images/event/study-jam/firebase-in-action.png"
          alt="firebase-in-action"
        />
        <img
          src="../assets/images/event/study-jam/firebase-in-action.png"
          alt="firebase-in-action"
        />
        <margin :width="width - 24"></margin>
      </div>
    </div>
  </modal>
</template>

<script>
import Margin from "@/components/Margin";

export default {
  props: ["info"],
  components: {
    Margin
  },
  data() {
    return {
      width: window.innerWidth >= 768 ? 48 : 24
    };
  },
  methods: {
    modalClose() {
      this.$modal.hide("event");
    }
  }
};
</script>

<style scoped>
.material-icons {
  font-size: 1.25rem;
  color: #ec5649;
}

.scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
}

.modal {
  padding: 32px 40px 16px 40px;
}

.modal h2 {
  font-family: Google Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  color: #ea4335;
  text-transform: uppercase;
}

.close {
  cursor: pointer;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal h1 {
  font-family: Google Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #333333;
}

.modal p {
  font-family: Google Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0;
  color: #333333;
}

.modal-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-wrapper .modal-details:nth-of-type(odd) {
  margin-right: 16px;
}

.modal-wrapper .modal-details:nth-of-type(even) {
  margin-left: 16px;
}

.modal-details {
  width: 50%;
  display: flex;
  align-items: center;
}

.modal-details p {
  margin: 0 0 0 16px;
}

.modal-footer {
  border-top: 1px solid #eaeaea;
  padding: 30px 0;
}

.modal-footer .scroll img {
  margin-right: 24px;
  height: 240px;
}

@media screen and (max-width: 480px) {
  .v--modal {
    height: 20px !important;
  }
}
</style>
