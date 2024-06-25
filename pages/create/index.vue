<template>
  <div>
    <AuthFirebase 
    title="Create" 
    @submit="register" 
    :form="registerForm" :message="registerMessage" />

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { signInUser, createUser, initUser } from '../../composables/useFirebase'; // Corrected imports

const firebaseUser = useFirebaseUser();
const registerForm = ref({ firstname: "", email: "", password: "" });

const registerMessage = ref("");



const register = async () => {
  console.log(registerForm.value);
  const credentials = await createUser(registerForm.value.email, registerForm.value.password);
  registerForm.value = { firstname: "", email: "", password: "" };
  if (credentials) {
    registerMessage.value = `Successfully registered ${credentials.user.email}`;
    setTimeout(() => {
      registerMessage.value = "";
    }, 3000);
  }
};

</script>
