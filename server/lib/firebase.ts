import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version

const firebaseConfig = {
  apiKey: "AIzaSyByJRMxO-5NMUcJx1XcRjr4hCshP-ZauFM",
  authDomain: "nuxtdb-47768.firebaseapp.com",
  projectId: "nuxtdb-47768",
  storageBucket: "nuxtdb-47768.appspot.com",
  messagingSenderId: "407253031160",
  appId: "1:407253031160:web:186b37c195785756b3c30d",
};
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);