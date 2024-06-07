<template>
    <div class="bg-zinc-300 w-full flex h-full">
        <div class="h-full mx-12 bg-stone-200">
        <div class="mx-12 h-full bg-stone-200">
        <div class="flex w-full h-screen">
        <div class="flex-grow text-wrap">
        <p class="font-bold text-slate-800 text-5xl ml-32 mt-48">Find A <span class=" text-stone-500">Perfect Home</span> To</p>
        <p class="font-bold text-slate-800 text-5xl ml-32 ">Live With Your Family</p>
        <p class="text-base text-gray-400 my-11 mr-40 ml-32">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
        <Button class="text-stone-200 h-12 bg-stone-500 rounded-lg w-32 ml-32 hover:bg-slate-900">Get Started</Button>
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
    <div class="flex bg-stone-500 h-fi rounded-lg mx-12 my-12">
     <div class="flex bg-stone-200 rounded-lg h-fit mx-12 my-4">
        <div class="flex">
            <img src="~/assets/me2.jpg" alt="" class="mx-28 my-12 h-96  rounded-lg">
        </div>
      <div class="text-wrap ">
        <p class="text-4xl font-bold ml-20 mt-28 text-slate-800">Contact With Our Certified Agent</p>
        <p class="mx-20 my-4 text-gray-400">Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
        <Button class="text-white bg-stone-500 hover:bg-slate-900 h-16 w-32 rounded-lg ml-20 my-14"><Icon name="ic:baseline-local-phone" class="text-white mr-1 mb-0.5 h-6 w-4"/>Make A Call</Button>
        <Button class="text-white bg-slate-900 hover:bg-stone-500 h-16 w-40 mx-2  rounded-lg my-14"><Icon name="heroicons:calendar-days-16-solid" class="text-white mr-1 mb-0.5 h-6 w-4"/>Get Appointment</Button>

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