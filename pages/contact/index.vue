<template>
    <div>
        <Header/>
    </div>
    <div class="bg-zinc-300 h-full w-full flex">

      <div class="flex bg-stone-500 h-fi rounded-lg mx-12 my-12">
         <div class="flex bg-stone-200 rounded-lg h-fit mx-12 my-4">
            <div class="flex">
                <img src="~/assets/me2.jpg" alt="" class="mx-28 my-12 h-96  rounded-lg">
            </div>
          <div class="text-wrap ">
            <p class="text-4xl font-bold ml-20 mt-28 text-slate-800">Contact With Our Certified Agent</p>
            <p class="mx-20 my-4 text-gray-400">Та Gersystem сайтад өөрийн гэр буудлыг нэмэхийг хүсвэл манай админтай холбогдоно уу!</p>
            <Button class="text-white bg-stone-500 hover:bg-slate-900 h-16 w-32 rounded-lg ml-20 my-14"><Icon name="ic:baseline-local-phone" class="text-white mr-1 mb-0.5 h-6 w-4"/>96611510</Button>
            <NuxtLink to="https://www.facebook.com/profile.php?id=100066647678479"><Button class="text-white bg-slate-900 hover:bg-stone-500 h-16 w-40 mx-2  rounded-lg my-14"><Icon name="ic:baseline-facebook" class="text-white mr-1 mb-0.5 h-6 w-4"/>Facebook</Button></NuxtLink>
    
          </div>
          
         </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

