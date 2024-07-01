<template>
  <div class="bg-sky-50 w-full flex h-full">
    <div class="h-full mx-12 border bg-white">
      <div class="mx-12 h-full bg-white">
        <div class="flex w-full h-screen">
          <div class="flex-grow text-wrap">
            <p class="font-bold text-slate-800 text-5xl ml-8 mt-48">Өвөрхангай аймаг <span
                class=" text-sky-500">Бат-Өлзий сумын</span></p>
            <p class="font-bold text-slate-800 text-5xl ml-8 ">100 жилийн баярын өдөр 7.26 наас 3 хоног</p>
            <p class="text-base text-gray-400 my-11 mr-40 ml-8">{{firebaseUser?.email}}</p>
              
            <NuxtLink to="/geruud"><Button
                class="text-white animate-bounce h-12 transition ease-in-out scale-100 hover:scale-110 bg-sky-500 rounded-lg w-32 ml-8 hover:bg-slate-900">Гэр
                захиалах</Button></NuxtLink>
          </div>
          <div class="w-2/3 h-full bg-cover bg-no-repeat my-36 mr-8 ">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
              class="rounded-lg overflow-hidden" arrows>
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

const items = [
  image1,
  image2,
  image3,
  image4,]

const carouselRef = ref()

const firebaseUser = useFirebaseUser();

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