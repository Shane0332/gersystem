import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.FIREBASE_API_KEY,
  };
  
  const app = initializeApp(firebaseConfig);
  initUser();
  const auth = getAuth(app);
nuxtApp.vueApp.provide('auth',auth)
nuxtApp.provide('auth',auth)

});