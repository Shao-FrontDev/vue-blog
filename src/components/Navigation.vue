<template>
  <header>
    <nav class="container">
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link class="link" :to="{ name: 'Blogs' }"
            >Blogs</router-link
          >
          <router-link class="link" to="#"
            >Create Post</router-link
          >
          <router-link class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </ul>
      </div>
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          <github class="github-icon" />
        </router-link>
      </div>
    </nav>
    <menuIcon
      @click="toggleMobileNav"
      class="menu-icon"
      v-show="mobile"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }"
          >Home</router-link
        >
        <router-link class="link" :to="{ name: 'Blogs' }"
          >Blogs</router-link
        >
        <router-link class="link" to="#"
          >Create Post</router-link
        >
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import github from "../assets/Icons/github.svg";

export default {
  name: "navigation",
  components: {
    menuIcon,
    github,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover::after {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      margin-left: -12px;
      margin-top: -12px;
      content: "";
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 3px solid #ffd03f;
      z-index: -1;
    }
  }
  nav {
    display: flex;
    padding: 10px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;

        .github-icon {
          cursor: pointer;
          height: 25px;
          width: auto;
          margin-right: 30px;
        }
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;

      ul {
        margin-right: 32px;
        .link {
          margin-right: 5px;
          font-weight: bolder;
          position: relative;
          &.router-link-exact-active::after {
            position: absolute;
            text-align: center;
            top: 50%;
            left: 50%;
            margin-left: -12px;
            margin-top: -12px;
            content: "";
            display: block;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            background-color: #ffd03f;
            border: 3px solid #ffd03f;
            z-index: -1;
          }
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
      &:hover::after {
        display: none;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
