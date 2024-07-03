<template>
  <!-- Header -->
  <div>
    <Header/>
  </div>
  <!-- Body Heseg -->
  <div class="bg-sky-50 h-full w-full flex justify-center">
    <div class="bg-white border h-2/4 w-72 rounded-lg shadow-lg shadow-sky-500 mt-32 mb-96 transition scale-100 hover:scale-110">
      <div class="mx-8 my-2">
        <span class="text-slate-900 font-bold text-3xl">{{ title }}</span>
      </div>
      <div v-if="title === 'Create'" class="mt-6">
        <UFormGroup name="firstname" class="mx-4">
          <span class="text-slate-900 text-sm">First name *</span>
          <UInput v-model="form.firstname" color="sky" placeholder="First name..." variant="outline" autocomplete="false" />
        </UFormGroup>
      </div>
      <div class="mt-6">
        <UFormGroup name="email" class="mx-4">
          <span class="text-slate-900 text-sm">Email *</span>
          <UInput v-model="form.email" color="sky" placeholder="Email..." variant="outline" autocomplete="false" />
        </UFormGroup>
      </div>
      <div class="mt-6">
        <UFormGroup name="password" class="mx-4">
          <span class="text-slate-900 text-sm">Password *</span>
          <UInput v-model="form.password" color="sky" placeholder="***********" variant="outline" class="text-black" autocomplete="false" />
        </UFormGroup>
      </div>
      <NuxtLink to="/create">
        <Button class="bg-sky-500 rounded-lg h-8 w-64 my-4 mx-4">Register</Button>
      </NuxtLink>      
      <NuxtLink to="/login">
        <Button class="bg-sky-500 rounded-lg h-8 w-64  mx-4">Sign In</Button>
      </NuxtLink>           
      <div v-if="message" class="has-text-success p-3">{{ message }}</div>
      <div v-if="title === 'Create'">
        <Button class="bg-sky-500 rounded-lg h-8 w-64 my-4 mx-4" @click="$emit('submit')">Create Account</Button>
      </div>
      <div v-if="title === 'Sign in'">
        <NuxtLink to="/home">
          <Button class="bg-sky-500 rounded-lg h-8 w-64  mx-4" @click="$emit('submit')">Sign In</Button>
        </NuxtLink>
      </div>
      <NuxtLink to="/home">
        <Button class="bg-sky-500 rounded-lg h-8 w-64 mb-4 mx-4">Home</Button>
      </NuxtLink>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  form: {
    firstname: string,
    email: string,
    password: string
  },
  title: string,
  message: string
}>();
</script>
