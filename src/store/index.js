import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1,2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1,2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1,2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1,2021",
      },
    ],
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: false,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations,
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
    async getPost({ state }) {
      const dataBase = await db
        .collection("blogPosts")
        .orderBy("date", "desc");
      const dbResults = await dataBase.get();
      console.log(dbResults);
      dbResults.forEach((doc) => {
        if (
          !state.blogPosts.some(
            (post) => post.blogID === doc.id
          )
        ) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
      console.log("blogs", state.blogPosts);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db
        .collection("users")
        .doc(state.profileId);

      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});
