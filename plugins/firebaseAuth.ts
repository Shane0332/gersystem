
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: "AIzaSyByJRMxO-5NMUcJx1XcRjr4hCshP-ZauFM",
    authDomain: "nuxtdb-47768.firebaseapp.com",
    projectId: "nuxtdb-47768",
    storageBucket: "nuxtdb-47768.appspot.com",
    messagingSenderId: "407253031160",
    appId: "1:407253031160:web:186b37c195785756b3c30d",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Ensure initUser is defined or imported
  if (typeof initUser === "function") {
    initUser();
  } else {
    console.warn("initUser function is not defined");
  }

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

});
