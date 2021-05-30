export default {
  toggleEditPost(state, payload) {
    state.editPost = payload;
    console.log(state.editPost);
  },
  setProfileInfo(state, doc) {
    console.log("setProfileInfo", typeof state.user);
    state.profileId = doc.id;
    console.log("doc.data", doc.data());
    state.profileEmail = doc.data().email;
    state.profileFirstName = doc.data().firstName;
    state.profileLastName = doc.data().lastName;
    state.profileUsername = doc.data().username;
  },
  setProfileInitials(state) {
    state.profileInitials =
      state.profileFirstName.match(/(\b\S)?/g).join("") +
      state.profileLastName.match(/(\b\S)?/g).join("");
  },
  updateUser(state, payload) {
    console.log("updateUser", payload);
    state.user = payload;
  },
  changeFirstName(state, payload) {
    state.profileFirstName = payload;
  },
  changeLastName(state, payload) {
    state.profileLastName = payload;
  },
  changeUsername(state, payload) {
    state.profileUsername = payload;
  },
};
