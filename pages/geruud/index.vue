<template>
    <!-- header -->
    <div class="bg-zinc-300 w-full h-100">
    <div class="h-12  bg-stone-500 text-stone-900 mx-12 md:32 lg:80">
<div class="flex justify-start space-x-10 ml-32 text-sm ">
<a href="#" class="hover:text-white my-4"><Icon name="ic:baseline-local-phone" class="mr-1 mb-0.5"/>96611510</a>
<a href="#" class="hover:text-white my-4"><Icon name="ic:outline-mail" class="mr-1 mb-0.5"/>Gersystem@gmail.com</a>
<a href="https://www.facebook.com/profile.php?id=100066647678479" class="hover:text-white my-4"><Icon name="ic:baseline-facebook" class="mr-1 mb-0.5"/>Gersystem</a>
<a href="https://www.instagram.com/ripperflyy/" class="hover:text-white my-4"><Icon name="tabler:brand-instagram" class="mr-1 mb-0.5"/>gersystem</a>
</div>
</div>
<div class="bg-stone-400 h-24 mx-12 flex">
    <div class="w-28 h-28 justify-start mx-32">
        <img src="~/assets/Logo.png" alt="">
    </div>
    <div class="my-7 mx-20 space-x-11 ml-96">
    <NuxtLink to="/home"><Button class="transition ease-in-out delay-80 bg-stone-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10  w-24 rounded-lg">Нүүр</Button></NuxtLink>
    <NuxtLink to="/contact"><Button class="transition ease-in-out delay-80 bg-stone-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10  w-24 rounded-lg">Гэр нэмэх</Button></NuxtLink>
    <NuxtLink to="/geruud"><Button class="transition ease-in-out delay-80 bg-stone-500 hover:-translate-y-1 hover:scale-110 shadow-2xl hover:bg-slate-900 duration-100 border border-white h-10  w-32 rounded-lg">Гэр захиалах</Button></NuxtLink>
    </div>
</div>
</div>


    <!-- Body heseg -->
    <div class="bg-zinc-300 h-full w-full flex">
        <div class="bg-stone-200 mx-12  h-fit text-wrap">
            <div class="text-wrap">
            <p class="font-bold text-4xl text-slate-900 mx-12 my-6">Жуулчны баазууд</p>
            <p class="text-gray-800 text-sm my-4 mx-12">Та дараах жуулчны баазуудын жагсаалттай танилцан өөрт тохирохыг сонгоно уу!</p>
            </div>
            <div class="flex justify-end ">
                </div>
                    <div class="flex text-wrap">
                        <NuxtLink to="/bluesky">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="" class="rounded-lg">
                     <p class="mx-6 my-6 font-bold text-2xl text-slate-900 hover:text-green-400">Blue Sky Tourist Camp</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>ӨВ Бат-өлзий сум</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>Гэрийн тоо : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Сүлжээ : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Зай : 5км</p>     
                     </div>

                     </div>
                    </NuxtLink>
                    <NuxtLink to="/bluesky">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger4.jpg" alt="" class="rounded-lg">
                     <p class="mx-6 my-6 font-bold text-2xl text-slate-900 hover:text-green-400">Blue Sky Tourist Camp</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>ӨВ Бат-өлзий сум</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>Гэрийн тоо : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Сүлжээ : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Зай : 5км</p>     
                     </div>

                     </div>
                    </NuxtLink>
                    <NuxtLink to="/bluesky">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger3.jpg" alt="" class="rounded-lg w-96 h-52">
                     <p class="mx-6 my-6 font-bold text-2xl text-slate-900 hover:text-green-400">Blue Sky Tourist Camp</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>ӨВ Бат-өлзий сум</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>Гэрийн тоо : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Сүлжээ : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Зай : 5км</p>     
                     </div>

                     </div>
                    </NuxtLink>
                    </div>
                    
                    <div>
                        <div class="flex text-wrap">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-10 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                    </div>  
                    </div>
                    <div>
                        <div class="flex text-wrap">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-10 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                    </div>  
                    </div>
                    <div>
                        <div class="flex text-wrap">
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-10 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

                     </div>
                     <div class="bg-stone-100 mx-12 my-8 h-96 w-96 rounded-lg text-wrap">
                     <img src="~/assets/ger2.jpg" alt="">
                     <p class="font-bold text-green-400 mx-6 my-2">$12,800</p>
                     <p class="mx-6 font-bold text-2xl text-slate-900 hover:text-green-400">Golden Urban House For Sell</p>
                     <p class="text-slate-900 mx-6"><Icon name="material-symbols:location-on-rounded" class="text-green-400 mr-1 mb-0.5"/>123 street new york</p>
                     <UDivider type="dashed" class="my-4"/>
                     <div class="flex text-wrap text-sm space-x-4">
                         <p class="text-black ml-6"><Icon name="heroicons:building-storefront-solid" class="mr-1 mb-0.5 text-green-400"/>geriin too : 5</p>     
                         <p class="text-black"><Icon name="ic:baseline-signal-cellular-alt"class="mr-1 mb-0.5 text-green-400 h-4 w-4"/>Syljee : 4G</p>     
                         <p class="text-black"><Icon name="material-symbols-light:distance"class="mr-1 mb-0.5 text-green-400 h-5 w-5"/>Zai : 5 kilometer</p>     
                     </div>

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

