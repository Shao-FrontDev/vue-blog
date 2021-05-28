import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB59X6m6ccxfbuCFVx1d-7vPdsyqPQD8ww",
  authDomain: "fireblog-9352c.firebaseapp.com",
  projectId: "fireblog-9352c",
  storageBucket: "fireblog-9352c.appspot.com",
  messagingSenderId: "999782488447",
  appId: "1:999782488447:web:e95193db34f6e882c5e24a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp =
  firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();
