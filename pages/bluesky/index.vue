<template>
    <!-- Header -->
  <div>
    <Header/>
  </div>
  <!-- Body -->
   <div class="bg-zinc-300 h-fit w-full flex">
       <div class="bg-stone-200 h-fit mx-12">
          <p class="font-bold text-slate-900 mx-12 my-6">Blue Sky Tourist camp</p>
          <p class="text-sm text-black mx-12 my-6"><Icon name="material-symbols-light:distance" class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>ӨВ Бат-өлзий сум</p>
          <div class="bg-stone-300 h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-6">1 Дугаартай гэр :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-stone-300 h-54 w-96 my-2 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/ger2.jpg" alt="" class="rounded-lg">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/ger2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/ger2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/ger2.jpg" alt="" class="rounded-lg"
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-stone-200 border border-black rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="flex">
                  <div>
                    <div class="bg-stone-200 border border-black  my-3  rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:bed-empty" class="mb-0.5 mr-1 ml-1"/>5 ортой</p>
                    </div>
                    <div class="bg-stone-200 border my-3 border-black rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="material-symbols:other-houses" class="mb-0.5 mr-1 ml-1"/>5 ханатай</p>
                    </div>
                    <div class="bg-stone-200 border my-3 border-black rounded-sm h-6 w-24 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-signal-cellular-alt" class="mb-0.5 mr-1 ml-1"/>4G сүлжээ</p>
                      </div>
                        <div class="bg-stone-200 border my-3 border-black rounded-sm h-6 w-32 ml-20">
                          <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 mr-1 ml-1"/>Үнэгүй зогсоол</p>
                        </div>
                    <div class="bg-stone-200 border my-3 border-black rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 mr-1 ml-1"/>Өглөөний цай</p>
                    </div>
                  </div>
                  <div>
                    <p class="ml-28 text-sm text-black mt-1">Гэрийн үнэ :</p>
                    <div class="bg-stone-200 border border-black rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">80000<Icon name="tabler:currency-tugrik" class="text-green mr-1 mb-1"/></p>
                    </div>
                    <p class="ml-28 text-black text-sm mt-6">Захиалах :</p>
                    <div class="bg-stone-200 border border-black rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-lg font-bold mx-4 my-2">96611510<Icon name="material-symbols:call-sharp" class="text-green mx-1 mb-1"/></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="flex">
            <div>
              <p class="my-6 mx-12 font-bold text-black"><Icon name="material-symbols:directions-walk" class="mb-0.5 mr-1"/>Ойролцоо газарууд</p>
              <p class="text-sm text-black my-2 mx-12">Сумын төв</p>
              <p class="text-sm text-black my-3 mx-12">Улаанцутгалан</p>
              <p class="text-sm text-black my-3 mx-12">Бага цутгалан</p>
              <p class="text-sm text-black my-3 mx-12">Төвхөн хийд</p>
            </div>
            <div class="ml-12">
              <p class="my-6 font-bold text-black">Зай</p>
              <p class="text-black text-sm my-3">12км</p>
              <p class="text-black text-sm my-3">1.2км</p>
              <p class="text-black text-sm my-3">500м</p>
              <p class="text-black text-sm my-3">15км</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-black">Дэлгүүр</p>
              <p class="text-sm text-black my-2 mx-12">Баян</p>
              <p class="text-sm text-black my-3 mx-12">Хангай</p>
              <p class="text-sm text-black my-3 mx-12">Улаан</p>
              <p class="text-sm text-black my-3 mx-12">Цагаан</p>
            </div>
            <div class="ml-32">
              <p class="my-6  font-bold text-black">Зай</p>
              <p class="text-black text-sm my-3">300м</p>
              <p class="text-black text-sm my-3">120м</p>
              <p class="text-black text-sm my-3">400м</p>
              <p class="text-black text-sm my-3">500м</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-black">Гол</p>
              <p class="text-sm text-black my-2 mx-12">Орхон</p>
              <p class="text-sm text-black my-3 mx-12">Улаан</p>
              <p class="text-sm text-black my-3 mx-12">Хөнөг</p>
              <p class="text-sm text-black my-3 mx-12">Цагаан</p>
            </div>
            <div class="ml-32">
              <p class="my-6  font-bold text-black">Зай</p>
              <p class="text-black text-sm my-3">160м</p>
              <p class="text-black text-sm my-3">1км</p>
              <p class="text-black text-sm my-3">2.3км</p>
              <p class="text-black text-sm my-3">8.9км</p>
            </div>
          </div>
          <div class="bg-stone-300 h-fit my-6 mx-12 flex">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-4">1 Dugaartai ger :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6 contrast-125 ">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-stone-200 border border-black rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:bed-empty" class="mb-0.5 mr-1 ml-1"/>5 ortoi</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="material-symbols:other-houses" class="mb-0.5 mr-1 ml-1"/>5 hanatai</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-signal-cellular-alt" class="mb-0.5 mr-1 ml-1"/>4G suljee</p>
                  </div>
                    <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                      <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 mr-1 ml-1"/>Unegui zogsool</p>
                    </div>
                <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 mr-1 ml-1"/>Ugluunii tsai</p>
                </div>
              </div>
          </div>
          <div class="flex">
            <div>
              <p class="my-6 mx-12 font-bold text-black"><Icon name="material-symbols:directions-walk" class="mb-0.5 mr-1"/>What's nearby</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-black">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
          </div>
          <div class="bg-stone-300 h-fit mx-12 flex">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-4">1 Dugaartai ger :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6 contrast-125 ">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-stone-200 border border-black rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:bed-empty" class="mb-0.5 mr-1 ml-1"/>5 ortoi</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="material-symbols:other-houses" class="mb-0.5 mr-1 ml-1"/>5 hanatai</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-signal-cellular-alt" class="mb-0.5 mr-1 ml-1"/>4G suljee</p>
                  </div>
                    <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                      <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 mr-1 ml-1"/>Unegui zogsool</p>
                    </div>
                <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 mr-1 ml-1"/>Ugluunii tsai</p>
                </div>
              </div>
          </div>
          <div class="flex">
            <div>
              <p class="my-6 mx-12 font-bold text-black"><Icon name="material-symbols:directions-walk" class="mb-0.5 mr-1"/>What's nearby</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
          </div>
          <div class="bg-stone-300 h-fit mx-12 flex">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-4">1 Dugaartai ger :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6 contrast-125 ">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                      <div class="bg-stone-300 h-54 w-96 my-6 mx-6">
                        <img src="~/assets/ger2.jpg" alt="">
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-stone-200 border border-black rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:bed-empty" class="mb-0.5 mr-1 ml-1"/>5 ortoi</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="material-symbols:other-houses" class="mb-0.5 mr-1 ml-1"/>5 hanatai</p>
                </div>
                <div class="bg-stone-200 rounded-sm h-5 w-24 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-signal-cellular-alt" class="mb-0.5 mr-1 ml-1"/>4G suljee</p>
                  </div>
                    <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                      <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 mr-1 ml-1"/>Unegui zogsool</p>
                    </div>
                <div class="bg-stone-200 rounded-sm h-5 w-32 ml-20">
                  <p class="border border-black rounded-sm text-black my-3 text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 mr-1 ml-1"/>Ugluunii tsai</p>
                </div>
              </div>
          </div>
          <div class="flex">
            <div>
              <p class="my-6 mx-12 font-bold text-black"><Icon name="material-symbols:directions-walk" class="mb-0.5 mr-1"/>What's nearby</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
            <div>
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-sm text-black my-2 mx-12">Sumiin tuv</p>
              <p class="text-sm text-black my-3 mx-12">Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Baga Tsutgalan</p>
              <p class="text-sm text-black my-3 mx-12">Orhon gol</p>
            </div>
            <div class="ml-32">
              <p class="my-6 mx-12 font-bold text-stone-200">dshkgjd</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
              <p class="text-black text-sm my-3">300m</p>
            </div>
          </div>
         </div>
    </div>
   <div>
    <Footer/>
   </div>
  
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default"
})
</script>

