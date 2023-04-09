import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD_HnNwyMFqlaTSuVRRn2OuW3vE6LXlTzc",

  authDomain: "reviewerz-auth.firebaseapp.com",

  projectId: "reviewerz-auth",

  storageBucket: "reviewerz-auth.appspot.com",

  messagingSenderId: "1082281122026",

  appId: "1:1082281122026:web:13a9e23f53ffc363be5f93",

  measurementId: "G-KBHSNB029X",
});

export const auth = firebase.auth();
export const db = getFirestore(app);
export default app;
