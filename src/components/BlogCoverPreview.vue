<template>
  <div class="modal">
    <header>
      <div class="icon" @click="closePreview">
        <Close class="close" />
      </div>
    </header>
    <div class="modal-content">
      <img :src="blogCoverPhoto" alt="" />
    </div>
  </div>
</template>

<script>
import Close from "../assets/Icons/close.svg";

export default {
  name: "BlogCoverPreview",
  components: {
    Close,
  },

  methods: {
    closePreview() {
      this.$store.commit("openPhotoPreview");
    },
  },

  computed: {
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
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
    padding: 20px;
    background-color: #ffd03f;
    overflow: hidden;

    p {
      text-align: center;
      font-weight: bold;
    }

    button {
      align-self: center;
    }

    img {
      margin-top: 16px;
      display: block;
      width: auto;
      height: 100%;
      box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      border-radius: 8px;
    }
  }
}
</style>
