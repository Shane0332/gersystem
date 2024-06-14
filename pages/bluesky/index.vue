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
<div class="bg-white shadow-inner rounded-lg h-24 mx-12 flex">
    <div class="w-28 h-28 justify-start ml-28">
        <img src="~/assets/Logo.png" alt="">
    </div>
    <p class="text-5xl font-bold text-slate-900 my-5">Ger System</p>
    <div class="my-7 mx-20 space-x-11 ml-96">
    <NuxtLink to="/home"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-gray-300 h-10 text-sm  w-24 rounded-lg">НҮҮР</Button></NuxtLink>
    <NuxtLink to="/contact"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10 text-sm  w-28 rounded-lg">ГЭР НЭМЭХ</Button></NuxtLink>
    <NuxtLink to="/geruud"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10 text-sm  w-36 rounded-lg">ГЭР ЗАХИАЛАХ</Button></NuxtLink>
    </div>
</div>
</div>
  <!-- Body -->
   <div class="bg-sky-50 h-fit w-full flex">
       <div class="bg-white h-fit border mx-12">
          <p class="font-bold text-slate-900 mx-12 my-6">Blue Sky Tourist camp</p>
          <p class="text-sm text-black mx-12 my-6"><Icon name="material-symbols-light:distance" class="mr-1 mb-0.5 text-sky-400 h-5 w-5"/>ӨВ Бат-өлзий сум</p>
          <div class="bg-white border h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-6">1 Дугаартай гэр :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-white h-54 w-96 my-2 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/bluesky/gerr1.jpg" alt="" class="rounded-lg h-56 w-96">
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr3.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr4.jpg" alt="" class="rounded-lg h-56 w-96"
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-white border border-gray-200 rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="flex">
                  <div>
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
                          <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Үнэгүй зогсоол</p>
                        </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Өглөөний цай</p>
                    </div>
                  </div>
                  <div>
                    <p class="ml-28 text-sm text-black mt-1">Гэрийн үнэ :</p>
                    <div class="bg-white border rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">80000<Icon name="tabler:currency-tugrik" class=" text-sky-500 mr-1 mb-1"/></p>
                    </div>
                    <p class="ml-28 text-black text-sm mt-6">Захиалах :</p>
                    <div class="bg-white border  rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-lg font-bold mx-4 my-2">96611510<Icon name="material-symbols:call-sharp" class="text-sky-500 mx-1 mb-1"/></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="bg-white border h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-6">1 Дугаартай гэр :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-white h-54 w-96 my-2 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/bluesky/gerr1.jpg" alt="" class="rounded-lg h-56 w-96">
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr3.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr4.jpg" alt="" class="rounded-lg h-56 w-96"
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-white border border-gray-200 rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="flex">
                  <div>
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
                          <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Үнэгүй зогсоол</p>
                        </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Өглөөний цай</p>
                    </div>
                  </div>
                  <div>
                    <p class="ml-28 text-sm text-black mt-1">Гэрийн үнэ :</p>
                    <div class="bg-white border rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">80000<Icon name="tabler:currency-tugrik" class=" text-sky-500 mr-1 mb-1"/></p>
                    </div>
                    <p class="ml-28 text-black text-sm mt-6">Захиалах :</p>
                    <div class="bg-white border  rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-lg font-bold mx-4 my-2">96611510<Icon name="material-symbols:call-sharp" class="text-sky-500 mx-1 mb-1"/></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="bg-white border h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-6">1 Дугаартай гэр :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-white h-54 w-96 my-2 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/bluesky/gerr1.jpg" alt="" class="rounded-lg h-56 w-96">
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr3.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr4.jpg" alt="" class="rounded-lg h-56 w-96"
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-white border border-gray-200 rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="flex">
                  <div>
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
                          <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Үнэгүй зогсоол</p>
                        </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Өглөөний цай</p>
                    </div>
                  </div>
                  <div>
                    <p class="ml-28 text-sm text-black mt-1">Гэрийн үнэ :</p>
                    <div class="bg-white border rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">80000<Icon name="tabler:currency-tugrik" class=" text-sky-500 mr-1 mb-1"/></p>
                    </div>
                    <p class="ml-28 text-black text-sm mt-6">Захиалах :</p>
                    <div class="bg-white border  rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-lg font-bold mx-4 my-2">96611510<Icon name="material-symbols:call-sharp" class="text-sky-500 mx-1 mb-1"/></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="bg-white border h-fit mx-12 flex rounded-lg">
              <div>
                  <p class="font-bold text-slate-900 mx-6 my-6">1 Дугаартай гэр :</p>
                  <div class="grid grid-cols-2">
                      <div class="bg-white h-54 w-96 my-2 mx-6 contrast-125  rounded-lg">
                        <img src="~/assets/bluesky/gerr1.jpg" alt="" class="rounded-lg h-56 w-96">
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr2.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr3.jpg" alt="" class="rounded-lg"
                      </div>
                      <div class="bg-white h-54 w-96 my-2 mx-6 rounded-lg">
                        <img src="~/assets/bluesky/gerr4.jpg" alt="" class="rounded-lg h-56 w-96"
                      </div>
                  </div>
              </div>
              <div>
                <div class="bg-white border border-gray-200 rounded-lg w-96 h-72 mt-20 mx-20">
                  <p class="text-black">end map shaana</p>
                </div>
                <div class="flex">
                  <div>
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
                          <p class=" rounded-sm text-black  text-sm "><Icon name="ic:baseline-local-parking" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Үнэгүй зогсоол</p>
                        </div>
                    <div class="bg-white border my-3  rounded-sm h-6 w-32 ml-20">
                      <p class=" rounded-sm text-black  text-sm "><Icon name="mdi:food-croissant" class="mb-0.5 text-sky-500 mr-1 ml-1"/>Өглөөний цай</p>
                    </div>
                  </div>
                  <div>
                    <p class="ml-28 text-sm text-black mt-1">Гэрийн үнэ :</p>
                    <div class="bg-white border rounded-lg h-12 w-36 ml-28 my-2">
                     <p class="text-black text-xl font-bold mx-6 my-2">80000<Icon name="tabler:currency-tugrik" class=" text-sky-500 mr-1 mb-1"/></p>
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
   <div>
    <Footer/>
   </div>
  
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default"
})
</script>

