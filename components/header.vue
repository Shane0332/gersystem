<template>
<div class="bg-sky-50 w-full md:w-full h-100">
    <div class="h-12  bg-white border  text-stone-900 mx-12 md:32 lg:80">
        <div class="flex justify-start space-x-10 ml-32 text-sm ">
            <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-local-phone" class="mr-1 mb-0.5"/>96611510</a>
            <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:outline-mail" class="mr-1 mb-0.5"/>Gersystem@gmail.com</a>
            <a href="https://www.facebook.com/profile.php?id=100066647678479" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-facebook" class="mr-1 mb-0.5"/>Gersystem</a>
            <a href="https://www.instagram.com/ripperflyy/" class="hover:text-sky-500 my-4"><Icon name="tabler:brand-instagram" class="mr-1 mb-0.5"/>gersystem</a>
        </div>
    </div>
    <div class="bg-white shadow-inner rounded-lg h-24 mx-12 flex">
        <div class="w-28 h-28 justify-start ml-28">
            <img src="~/assets/Logo.png" alt="">
        </div>
        <p class="text-4xl font-bold text-slate-900 my-5">Ger System</p>
        <div class="my-7 mx-20 space-x-11 ml-52">
            
            <NuxtLink to="/home"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-sm hover:bg-slate-900  border  h-10 text-sm  w-24 rounded-lg">НҮҮР</Button></NuxtLink>
            
            <NuxtLink to="/geruud"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border h-10 text-sm  w-36 rounded-lg">Жуулчны Баазууд</Button></NuxtLink>
            <NuxtLink v-if="firebaseUser?.uid=='ghjMoHqbUCatP9RSemi375kfhhi2'" to="/contact"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border  h-10 text-sm  w-44 rounded-lg">БАЙГУУЛЛАГА НЭМЭХ</Button></NuxtLink>
            <NuxtLink  v-if="firebaseUser" to="/home"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-sm hover:bg-slate-900  border  h-10 text-sm  w-24 rounded-lg" @click="logout">Logout</Button></NuxtLink>

            <NuxtLink v-if="!firebaseUser" to="/login"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border h-10 text-sm  w-36 rounded-lg uppercase">Нэвтрэх</Button></NuxtLink>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
 // Ensure this import matches your project structure
import { signOutUser } from '@/composables/useFirebase'; // Ensure this import matches your project structure
import { useRouter } from 'vue-router';

const firebaseUser = useFirebaseUser();
const router = useRouter();
const logout = async () => {
  try {
    await signOutUser();
    firebaseUser.value = null; 
    router.push('/home'); 
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
</script>

