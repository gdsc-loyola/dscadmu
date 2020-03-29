<template>
  <modal name="hello-world" height="auto">
    <div class="modal">
      <div class="modal-header">
        <h2>{{ type }}</h2>
        <div class="close" v-on:click="modalClose">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.489502"
              y="2.11096"
              width="2"
              height="14"
              transform="rotate(-45 0.489502 2.11096)"
              fill="black"
            />
            <rect
              x="10.3889"
              y="0.989624"
              width="2"
              height="14"
              transform="rotate(45 10.3889 0.989624)"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="modal-wrapper">
        <div class="modal-details">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6665 2.49992H15.8332V0.833252H14.1665V2.49992H5.83317V0.833252H4.1665V2.49992H3.33317C2.4165 2.49992 1.6665 3.24992 1.6665 4.16658V17.4999C1.6665 18.4166 2.4165 19.1666 3.33317 19.1666H16.6665C17.5832 19.1666 18.3332 18.4166 18.3332 17.4999V4.16658C18.3332 3.24992 17.5832 2.49992 16.6665 2.49992ZM16.6665 17.4999H3.33317V6.66658H16.6665V17.4999Z"
              fill="#EA4335"
              fill-opacity="0.9"
            />
          </svg>
          <p>{{ datetime }}</p>
        </div>
        <div class="modal-details">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 9.16675C14.7166 9.16675 15.8249 8.05008 15.8249 6.66675C15.8249 5.28341 14.7166 4.16675 13.3333 4.16675C11.9499 4.16675 10.8333 5.28341 10.8333 6.66675C10.8333 8.05008 11.9499 9.16675 13.3333 9.16675ZM6.66658 9.16675C8.04992 9.16675 9.15825 8.05008 9.15825 6.66675C9.15825 5.28341 8.04992 4.16675 6.66658 4.16675C5.28325 4.16675 4.16658 5.28341 4.16658 6.66675C4.16658 8.05008 5.28325 9.16675 6.66658 9.16675ZM6.66658 10.8334C4.72492 10.8334 0.833252 11.8084 0.833252 13.7501V15.8334H12.4999V13.7501C12.4999 11.8084 8.60825 10.8334 6.66658 10.8334ZM13.3333 10.8334C13.0916 10.8334 12.8166 10.8501 12.5249 10.8751C13.4916 11.5751 14.1666 12.5167 14.1666 13.7501V15.8334H19.1666V13.7501C19.1666 11.8084 15.2749 10.8334 13.3333 10.8334Z"
              fill="#EC5649"
            />
          </svg>

          <p>{{ participants }} participants</p>
        </div>
      </div>
      <div class="modal-wrapper">
        <div class="modal-details">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99984 1.66675C6.77484 1.66675 4.1665 4.27508 4.1665 7.50008C4.1665 11.8751 9.99984 18.3334 9.99984 18.3334C9.99984 18.3334 15.8332 11.8751 15.8332 7.50008C15.8332 4.27508 13.2248 1.66675 9.99984 1.66675ZM9.99984 9.58341C8.84984 9.58341 7.9165 8.65008 7.9165 7.50008C7.9165 6.35008 8.84984 5.41675 9.99984 5.41675C11.1498 5.41675 12.0832 6.35008 12.0832 7.50008C12.0832 8.65008 11.1498 9.58341 9.99984 9.58341Z"
              fill="#EC5649"
            />
          </svg>

          <p>{{ location }}</p>
        </div>
        <div class="modal-details">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.58325 17.3334V11.0834H0.333252V6.50008C0.333252 5.58342 1.08325 4.83341 1.99992 4.83341H4.49992C5.41658 4.83341 6.16658 5.58342 6.16658 6.50008V11.0834H4.91658V17.3334H1.58325ZM11.9999 17.3334V12.3334H14.4999L12.3832 5.97508C12.1499 5.29175 11.5166 4.83341 10.7999 4.83341H10.6999C9.98325 4.83341 9.34158 5.29175 9.11658 5.97508L6.99992 12.3334H9.49992V17.3334H11.9999ZM3.24992 4.00008C4.17492 4.00008 4.91658 3.25841 4.91658 2.33341C4.91658 1.40841 4.17492 0.666748 3.24992 0.666748C2.32492 0.666748 1.58325 1.40841 1.58325 2.33341C1.58325 3.25841 2.32492 4.00008 3.24992 4.00008ZM10.7499 4.00008C11.6749 4.00008 12.4166 3.25841 12.4166 2.33341C12.4166 1.40841 11.6749 0.666748 10.7499 0.666748C9.82492 0.666748 9.08325 1.40841 9.08325 2.33341C9.08325 3.25841 9.82492 4.00008 10.7499 4.00008Z"
              fill="#EC5649"
            />
          </svg>

          <p>{{ female }} female participants</p>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <div class="scroll" v-dragscroll>
        <margin :width="width"></margin>
        <img src="../assets/images/event/study-jam/firebase-in-action.png" alt="firebase-in-action" />
        <img src="../assets/images/event/study-jam/firebase-in-action.png" alt="firebase-in-action" />
        <img src="../assets/images/event/study-jam/firebase-in-action.png" alt="firebase-in-action" />
        <img src="../assets/images/event/study-jam/firebase-in-action.png" alt="firebase-in-action" />
        <margin :width="width"></margin>
      </div>
    </div>
  </modal>
</template>

<script>
import Margin from "@/components/Margin";

export default {
  props: [
    "title",
    "type",
    "description",
    "datetime",
    "participants",
    "location",
    "female"
  ],
  components: {
    Margin
  },
  methods: {
    modalOpen() {
      this.$modal.show("hello-world");
    },
    modalClose() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style scoped>
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
</style>
