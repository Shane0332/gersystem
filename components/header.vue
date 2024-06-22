<template>
    <div class="bg-sky-50 w-full md:w-full h-100">
        <div class="h-12  bg-white border  text-stone-900 mx-12 md:flex lg:80">
            <div class="flex justify-start space-x-10 ml-32 text-sm ">
                <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-local-phone" class="mr-1 mb-0.5"/>96611510</a>
                <a href="#" class="hover:text-sky-500 my-4"><Icon name="ic:outline-mail" class="mr-1 mb-0.5"/>Gersystem@gmail.com</a>
                <a href="https://www.facebook.com/profile.php?id=100066647678479" class="hover:text-sky-500 my-4"><Icon name="ic:baseline-facebook" class="mr-1 mb-0.5"/>Gersystem</a>
                <a href="https://www.instagram.com/ripperflyy/" class="hover:text-sky-500 my-4"><Icon name="tabler:brand-instagram" class="mr-1 mb-0.5"/>gersystem</a>
            </div>
        </div>
        <div class="bg-white shadow-inner rounded-lg h-24 mx-12 flex">
            <div class="w-28 h-28 justify-start ml-28 ">
                <div class="md:shrink-0">
                    <img src="~/assets/Logo.png" alt="" class="">
                </div>
            </div>
            <p class="text-4xl font-bold text-slate-900 my-5">Ger System</p>
            <div class="my-7 mx-20 space-x-11 ml-52 ">
                <div class="md:w-32 lg:wp">
                    <NuxtLink to="/home"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-sm hover:bg-slate-900  border  h-10 text-sm  w-24 rounded-lg">НҮҮР</Button></NuxtLink>
                <NuxtLink to="/contact"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border  h-10 text-sm  w-28 rounded-lg">ГЭР НЭМЭХ</Button></NuxtLink>
                <NuxtLink to="/geruud"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border h-10 text-sm  w-36 rounded-lg">ГЭР ЗАХИАЛАХ</Button></NuxtLink>
                <NuxtLink to="/create"><Button class="transition ease-in-out  bg-sky-500  hover:scale-110 shadow-2xl hover:bg-slate-900  border h-10 text-sm  w-36 rounded-lg uppercase">Нэвтрэх</Button></NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>
