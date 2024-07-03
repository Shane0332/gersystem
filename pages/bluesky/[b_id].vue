<template>
    <!-- Header -->
 <Header/>
  <!-- Body -->
   <div class="bg-sky-50 h-fit w-full flex">
       <div class="bg-white h-fit border mx-12">
        <div class="grid grid-cols-2">
          <div>
            <p class="font-bold text-slate-900 mx-12 my-6">{{id}}</p> 
          </div>
          <div class="flex justify-end">
           <NuxtLink to="/ger"> <UButton label="ГЭР НЭМЭХ" color="gray" class="w-26 h-8 my-6 mx-12 animate-bounce text-white"/></NuxtLink>
          </div>
        </div>
        
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


