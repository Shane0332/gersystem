<template>
    <div class="bg-zinc-300 w-full flex h-full">
        <div class="h-full mx-12 bg-stone-200">
        <div class="mx-12 h-full bg-stone-200">
        <div class="flex w-full h-screen">
        <div class="flex-grow text-wrap">
        <p class="font-bold text-slate-800 text-5xl ml-32 mt-48">Find A <span class=" text-stone-500">Perfect Home</span> To</p>
        <p class="font-bold text-slate-800 text-5xl ml-32 ">Live With Your Family</p>
        <p class="text-base text-gray-400 my-11 mr-40 ml-32">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
        <NuxtLink to="/geruud"><Button class="text-stone-200 h-12 bg-stone-500 rounded-lg w-32 ml-32 hover:bg-slate-900">Гэр захиалах</Button></NuxtLink>
        </div>
         <div class="w-2/3 h-full bg-cover bg-no-repeat my-36 mr-8 ">
            <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
    arrows
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
         </div>
         </div>
        </div>
   
    </div>
    </div>
  
    
    
  </template>
  
  <script setup lang="ts">
  import image1 from '@/assets/ger2.jpg';
import image2 from '@/assets/ger3.jpg';
import image3 from '@/assets/ger4.jpg';
import image4 from '@/assets/ger5.jpg';
import image5 from '@/assets/call-to-action.jpg';

  const items = [
  image1,
  image2,
  image3,
  image4,
  image5,
  ]
  
  const carouselRef = ref()
  
  onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return
  
      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }
  
      carouselRef.value.next()
    }, 3000)
  })
  </script>