export default {
  openPhotoPreview(state) {
    state.blogPhotoPreview = !state.blogPhotoPreview;
  },
  updateBlogTitle(state, payload) {
    state.blogTitle = payload;
  },
  fileNameChange(state, payload) {
    state.blogPhotoName = payload;
  },
  createFileURL(state, payload) {
    state.blogPhotoFileURL = payload;
  },
  newBlogPost(state, payload) {
    state.blogHTML = payload;
  },
  toggleEditPost(state, payload) {
    state.editPost = payload;
  },
  setProfileInfo(state, doc) {
    state.profileId = doc.id;
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
