import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.FIREBASE_API_KEY,
    authDomain: "nuxtdb-47768.firebaseapp.com",
    projectId: "nuxtdb-47768",
    storageBucket: "nuxtdb-47768.appspot.com",
    messagingSenderId: "407253031160",
    appId: "1:407253031160:web:186b37c195785756b3c30d"
  };
  
  const app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized:", app);
  const auth = getAuth(app);

});