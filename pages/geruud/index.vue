<template>
    <!-- header -->
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
    <p class="text-4xl font-bold text-slate-900 my-5">Ger System</p>
    <div class="my-7 mx-20 space-x-11 ml-96">
    <NuxtLink to="/home"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-gray-300 h-10 text-sm  w-24 rounded-lg">НҮҮР</Button></NuxtLink>
    <NuxtLink to="/contact"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10 text-sm  w-28 rounded-lg">ГЭР НЭМЭХ</Button></NuxtLink>
    <NuxtLink to="/geruud"><Button class="transition ease-in-out delay-80 bg-sky-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10 text-sm  w-36 rounded-lg">ГЭР ЗАХИАЛАХ</Button></NuxtLink>
    </div>
</div>
</div>

    <!-- Body heseg -->
    <div class="bg-sky-50 h-full w-full flex">
        <div class="bg-white mx-12  h-fit text-wrap">
            <div class="text-wrap">
            <p class="font-bold text-4xl text-slate-900 mx-12 my-6">Жуулчны баазууд</p>
            <p class="text-gray-800 text-sm my-4 mx-12">Та дараах жуулчны баазуудын жагсаалттай танилцан өөрт тохирохыг сонгоно уу!</p>
            </div>
            <div class="bg-sky-50 h-96 mx-12 flex ">
                <img src="~/assets/ger2.jpg" alt="" class="rounded-lg w-2/5">
                <p class="text-black">kjsdfkjshdf</p>
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
              <p class="text-black text-sm my-3 mx-44">12км</p>
              <p class="text-black text-sm my-3">1.2км</p>
              <p class="text-black text-sm my-3">500м</p>
              <p class="text-black text-sm my-3">15км</p>
            </div>
            
          </div>

            </div>
        </div>
    </div>
   
<!-- Footer heseg -->

    <div>
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default"
})
</script>

