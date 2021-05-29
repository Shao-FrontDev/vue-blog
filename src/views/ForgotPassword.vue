<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Already have an account?
          <router-link
            class="router-link"
            :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>
          Forgot your password? Enter your email to reset
          it.
        </p>
        <div class="inputs">
          <div class="input">
            <input
              type="text"
              placeholder="Email"
              v-model="email"
            />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">
          Reset
        </button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  data() {
    return {
      modalActive: null,
      modalMessage: "",
      email: "",
      loading: false,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      console.log(this.loading);
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "if your account exists, you will receive a email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = null;
      this.email = "";
    },
  },
  components: {
    email,
    Modal,
    Loading,
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
