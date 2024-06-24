<template>
  <div>
    <p><NuxtLink to ="/secret">Go to Secret Page</NuxtLink></p>
    <button class="button" v-if="!firebaseUser" @click="signIn">Sign In</button>
    <button class="button" v-if="firebaseUser" @click="signOut">Sign Out</button>
    <div v-if="firebaseUser">
      <client-only>
        <pre class="text-white">
      {{ firebaseUser }}
    </pre>
      </client-only>
    </div>
<div v-else>User is signed out</div>

  </div>
</template>
<script lang="ts" setup>

import { signInUser, signOutUser, initUser } from '../../composables/useFirebase'; 


const credentials = ref()
const firebaseUser = useFirebaseUser();

const signIn = async () => {
  const email = "batzorigaltansuh@gmail.com";
  const password = "12345678";
  try {
    credentials.value = await signInUser(email, password);
    console.log("Credentials: ", credentials.value);
  } catch (error) {
    console.error("Error during sign in: ", error);
  }
};

const signOut = async () => {
  try {
    credentials.value = await signOutUser();
    console.log("Sign out result: ", credentials.value);
  } catch (error) {
    console.error("Error during sign out: ", error);
  }
};

initUser();
</script>
