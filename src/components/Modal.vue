<template>
  <div class="modal">
    <header>
      <div class="icon" @click="closeModal">
        <Close class="close" />
      </div>
    </header>
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
    </div>
  </div>
</template>

<script>
import Close from "../assets/Icons/close.svg";
export default {
  props: {
    modalMessage: {
      type: String,
    },
  },
  components: {
    Close,
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  > header {
    color: #fff;
    width: 300px;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #303030;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .icon {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 300px;
    min-height: 200px;
    padding: 40px 30px;
    background-color: #ffd03f;

    p {
      text-align: center;
      font-weight: bold;
    }

    button {
      align-self: center;
    }
  }
}
</style>
