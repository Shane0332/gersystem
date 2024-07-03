<template>
    <!-- Header -->
    <div class="bg-sky-50 w-full h-100">
      <div class="h-12  bg-white border  text-stone-900 mx-12 md:32 lg:80">
        <div class="flex justify-start space-x-10 ml-32 text-sm ">
          <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-local-phone" class="mr-1 mb-0.5"/>96611510</a>
          <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:outline-mail" class="mr-1 mb-0.5"/>Gersystem@gmail.com</a>
          <a href="https://www.facebook.com/profile.php?id=100066647678479" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-facebook" class="mr-1 mb-0.5"/>Gersystem</a>
          <a href="https://www.instagram.com/ripperflyy/" class="hover:text-sky-500 my-4"><Icon name="tabler:brand-instagram" class="mr-1 mb-0.5"/>gersystem</a>
        </div>
      </div>
    </div>
  <!-- Body -->
   <div class="bg-sky-50 h-fit w-full flex">
       <div class="bg-white h-fit border mx-12">
          <p class="font-bold text-slate-900 mx-12 my-6">{{id}}</p>
          <p class="text-sm text-black mx-12 my-6"><Icon name="material-symbols-light:distance" class="mr-1 mb-0.5 text-sky-400 h-5 w-5"/>ӨВ Бат-өлзий сум</p>
          <div v-for="ger in Ger" :key="ger.id" class="bg-white border h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-2">{{ ger.gu_id}} </p>
                  <div class="grid grid-cols-2">
                      <div class="bg-white h-54 w-96 my-4 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/bluesky/gerr1.jpg" alt="" class="rounded-lg h-56 w-96">
                      </div>
                      <div class="bg-white h-54 w-96 my-4 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr2.jpg" alt="" class="rounded-lg"/>
                      </div>
                  </div>
              </div>
              <div>
                
                <div class="flex">
                  <div class="mt-16">
                    <div class="bg-white border  my-3  rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:bed-empty" class="mb-0.5 text-sky-500 mr-1 ml-1"/>5 ортой</p>
                    </div>
                    <div class="bg-white border my-3k rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="material-symbols:other-houses" class="mb-0.5 text-sky-500 mr-1 ml-1"/>5 ханатай</p>
                    </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-signal-cellular-alt" class="mb-0.5 text-sky-500 mr-1 ml-1"/>4G сүлжээ</p>
                      </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 text-sky-500 mr-1 ml-1"/>{{ger.gu_uzuuleh_uilchilgee}}</p>
                    </div>
                  </div>
                  <div >
                    <p class="ml-28 mt-16 text-sm text-black">Гэрийн үнэ :</p>
                    <div class="bg-white border rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">{{ger.gu_une}}<Icon name="tabler:currency-tugrik" class=" text-sky-500 mr-1 mb-1"/></p>
                    </div>
                    <p class="ml-28 text-black text-sm mt-6">Захиалах :</p>
                    <div class="bg-white border  rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-lg font-bold mx-4 my-2">96611510<Icon name="material-symbols:call-sharp" class="text-sky-500 mx-1 mb-1"/></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
        </div>
      </div>
 <!-- Footer -->
    <div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.b_id);  

const Ger = ref<any[]>([]);  
const fetchGer = async () => {
  if (!id.value) return;  

  try {
    const response = await fetch(`/api/foo/readGer?col=ger&id=${id.value}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { result } = await response.json();
    Ger.value = result;
    console.log(Ger.value)
    console.log(result)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchGer);

watch(() => route.params.b_id, (newId) => {
  id.value = newId;
  fetchGer();  
});

definePageMeta({
  layout: 'default',
});
</script>


