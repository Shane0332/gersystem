<template>
  <div>
    <AuthFirebase 
    title="Sign in"
    @submit="signIn"
    :form="signInForm" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AuthFirebase from '@/components/AuthFirebase.vue'; // Import the AuthFirebase component
import { signInUser, createUser, initUser } from '../../composables/useFirebase'; // Corrected imports

const firebaseUser = useFirebaseUser();

const signInForm = ref({ email: "", password: "" });
const registerMessage = ref("");

const signIn = async () => {
  console.log(signInForm.value);
  try {
    await signInUser(signInForm.value.email, signInForm.value.password);
  } catch (error) {
    console.error("Error during sign in: ", error);
  }
};


</script>
