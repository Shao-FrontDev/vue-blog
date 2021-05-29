<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation" />
      <router-view />
      <Footer v-if="!navigation" />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      // let bool = Boolean(user);
      this.$store.commit("updateUser", user);

      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register " ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      } else {
        this.navigation = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import "./assets/styles/global.scss";

.app-wrapper {
  min-width: 320px;
}
</style>
