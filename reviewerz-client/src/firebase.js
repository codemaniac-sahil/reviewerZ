import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBmoHObEnlEV-oo6nWvYeRk6Tk3_ULnzLA",
  authDomain: "reviewerz-production-auth.firebaseapp.com",
  projectId: "reviewerz-production-auth",
  storageBucket: "reviewerz-production-auth.appspot.com",
  messagingSenderId: "698143380230",
  appId: "1:698143380230:web:8ef90ec97d650bbb15c487",
});

export const auth = firebase.auth();
export const db = getFirestore(app);
export default app;
