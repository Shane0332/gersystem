<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 p-4">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '~/components/header.vue';
  
  export default {
    components: {
      Header
    }
  }
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  