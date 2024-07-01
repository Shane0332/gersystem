<!-- pages/geruud/index.vue -->

<template>
    <!-- Header section -->
    <div>
      <Header/>
    </div>
  
    <!-- Main content -->
    <div class="bg-sky-50 h-full w-full">
      <div class="bg-white mx-12 h-full border shadow-xl">
        <p class="text-black ml-12 my-6">Та дараах жуулчны баазуудаас өөрт тохирохыг сонгоод дарна уу!</p>
  
        <!-- Loop through Bai array -->
        <div v-for="ba in Bai" :key="ba.id" class="bg-white border mx-12 my-6 rounded-lg flex">
          <div>
            // @ts-ignore
            <!-- Link to Bluesky page -->
            <NuxtLink :to="`/bluesky/${ba.b_id}`">
              <img src="~/assets/ger2.jpg" alt="" class="mx-6 h-16 w-16 md:h-96 md:w-4/5 my-4 saturate-200 rounded-lg transition hover:scale-110">
            </NuxtLink>
          </div>
          <div>
            <!-- Display b_id -->
            <p class="font-bold text-black hover:text-sky-500 my-4 md:text-4xl text-2xl">{{ ba.b_ner }}</p>
            <!-- Location and details -->
            <div class="my-2 flex">
              <div>
                <div class="flex bg-sky-50 h-6 w-52 md:w-52 border rounded-lg">
                  <p class="text-black text-sm mx-6"><Icon name="material-symbols:location-on-rounded" class="mr-1 mb-0.5 text-sky-500"/>Өв Бат-Өлзий сум</p>
                </div>
                <div class="bg-sky-50 my-4 h-6 w-36 border rounded-lg">
                  <p class="text-black text-sm mx-4"><Icon name="material-symbols:other-houses" class="mr-1 mb-0.5  text-sky-500"/>Гэрийн тоо : {{ba.b_gertoo}}</p>
                </div>
                <div class="bg-sky-50 my-4 h-6 w-36 border rounded-lg">
                  <p class="text-black text-sm mx-4"><Icon name="ic:baseline-signal-cellular-alt" class="mr-1 mb-0.5 text-sky-500"/>Сүлжээ : 4G</p>
                </div>
                <div class="bg-sky-50 my-4 h-6 w-52 border rounded-lg">
                  <p class="text-black text-sm mx-4"><Icon name="ic:round-follow-the-signs" class="mr-1 mb-0.5 text-sky-500"/>Сумийн төвөөс : 5км</p>
                </div>
                <div class="bg-sky-50 my-4 h-6 w-36 border rounded-lg">
                  <p class="text-black text-sm mx-4"><Icon name="mdi:food-croissant" class="mr-1 mb-0.5 text-sky-500"/>Өглөөний цай</p>
                </div>
              </div>
              <div class="bg-sky-50 mx-6 h-44 w-64 border">
                <!-- Link to Google Maps -->
                <a href="https://www.google.com/maps/place/Blue+Sky+Eco+Tourist+camp/@46.7927007,101.9381137,1248m/data=!3m1!1e3!4m6!3m5!1s0x5d82cbe9fb7f55bd:0x4bb78c40d5ef1f4c!8m2!3d46.7921446!4d101.9407811!16s%2Fg%2F11kp_99gt2!5m1!1e1?entry=ttu">
                  <img src="~/assets/map.png" alt="" class="rounded-lg">
                </a>
              </div>
            </div>
            <!-- What's nearby and distances -->
            <div class="flex">
              <div>
                <p class="font-bold text-black"> What's nearby</p>
                <p class="text-black text-sm">Сумын төв</p>
                <p class="text-black text-sm">Улаан цутгалан</p>
                <p class="text-black text-sm">Бага цутгалан</p>
                <p class="text-black text-sm">Төвхөн хийд</p>
              </div>
              <div class="mx-12">
                <p class="text-black font-bold">Distance</p>
                <p class="text-black text-sm">12.3км</p>
                <p class="text-black text-sm">360м</p>
                <p class="text-black text-sm">90м</p>
                <p class="text-black text-sm">16км</p>
              </div>
              <div>
                <p class="text-black font-bold">What's nearby</p>
                <p class="text-black text-sm">Хөнөг</p>
                <p class="text-black text-sm">Орхон</p>
                <p class="text-black text-sm">Улаан</p>
                <p class="text-black text-sm">Цагаан</p>
              </div>
              <div class="mx-12">
                <p class="text-black font-bold">Distance</p>
                <p class="text-black text-sm">2.3км</p>
                <p class="text-black text-sm">90м</p>
                <p class="text-black text-sm">1.3км</p>
                <p class="text-black text-sm">12км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <Footer/>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const Bai = ref([]);
  
  const fetchNews = async () => {
    try {
      const response = await fetch('/api/foo/query?col=Baiguullaga');
      const { result } = await response.json();
      Bai.value = result;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  
  onMounted(fetchNews);
  </script>
  
  <style scoped>
  </style>
  
