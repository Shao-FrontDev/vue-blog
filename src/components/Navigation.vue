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
          <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </ul>
        <div
          v-if="user"
          class="profile"
          @click="toggleProfileMenu"
          ref="profile"
        >
          <span>{{
            this.$store.state.profileInitials
          }}</span>
          <div class="profile-menu" v-show="profileMenu">
            <div class="info">
              <p class="initials">
                {{ this.$store.state.profileInitials }}
              </p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLirstName }}
                </p>
                <p>
                  {{ this.$store.state.profileusername }}
                </p>
                <p>
                  {{ this.$store.state.profileEmail }}
                </p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" to="#">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" to="#">
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div class="option" @click="signOut">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          <github class="github-icon" />
          <Time />
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
        <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import github from "../assets/Icons/github.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";

//component

import Time from "../components/Time.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
    github,
    Time,
  },
  data() {
    return {
      profileMenu: false,
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
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
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
          margin-right: 10px;
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

      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-self: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;

        span {
          pointer-events: none;
        }

        .profile-menu {
          border: 1px solid #303030;
          border-radius: 8px;
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #ffd03f;
          box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;

            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }

            .right {
              flex: 1;
              margin-left: 24px;

              p:nth-child(1) {
                font-size: 14px;
              }

              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }

          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #303030;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
            }
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
