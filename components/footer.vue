<template>
    <div class="bg-sky-50">
      <section class="container">
        <div class=" grid md:grid-cols-3 py-5">
          <div class=" py-8 px-4 ">
            <h1 class="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-slate-900">
              GerSystem.com
            </h1>
            <p class="">
            </p>
            <br />
            <div class="flex items-center gap-3">
            <!-- svg-->
              <p class="text-slate-900">All made for the mongolian ger(home)</p>
            </div>
            <div class="flex items-center gap-3 mt-3">
            <!-- svg-->

              <p class="text-slate-900">94940037</p>
            </div>
            <div class="flex items-center gap-3 mt-6">
              <!-- icons-->
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div class="">
              <div class="py-8 px-4 ">
                <h1 class="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-slate-900">
                  Тухай
                </h1>
                <ul class="flex flex-col gap-3">
                    <li class="cursor-pointer  duration-300 hover:text-primary border shadow-lg rounded-lg w-36 space-x-1 text-gray-500">
                        <UDropdown :items="items1" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Бидний тухай" />
                        </UDropdown>
                    </li>
                    <li class="cursor-pointer border w-36 shadow-lg rounded-lg duration-300 hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items2" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Хамтран ажиллах" />
                        </UDropdown>
                    </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="py-8 px-4 ">
                <h1 class="sm:text-xl border rounded-lg shadow-lg text-xl font-bold sm:text-left text-justify mb-3">
                    <UDropdown :items="items3" mode="hover" :popper="{ placement: 'right-start' }">
                        <UButton color="currentColor" class="text-grey-500" label="Тусламж" />
                    </UDropdown>
                </h1>
                <ul class="flex flex-col gap-3">
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg  selection: hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items4" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Үйлчилгээний нөхцөл" />
                        </UDropdown>
                    </li>
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg  hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items5" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Нууцлалын бодлого" />
                        </UDropdown>
                    </li>
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg  hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items6" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Түгээмэл асуулт хариулт" />
                        </UDropdown>
                    </li>
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg hover:text-primary space-x-1 text-sky-500">
                        <UDropdown :items="items7" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-sky-500" label="Буцаалтын журам" />
                        </UDropdown>
                    </li>
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg  hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items8" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="төлбөр төлөх боломжууд" />
                        </UDropdown>
                    </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="py-8 px-4 ">
                <h1 class="sm:text-xl text-xl font-bold border rounded-lg shadow-lg sm:text-left text-justify mb-3">
                    <UDropdown :items="items9" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Холбоо барих" />
                        </UDropdown>
                </h1>
                <ul class="flex flex-col gap-3">
                    <li class="cursor-pointer duration-300 border rounded-lg shadow-lg hover:text-primary space-x-1 text-gray-500">
                        <UDropdown :items="items10" mode="hover" :popper="{ placement: 'right-start' }">
                            <UButton color="currentColor" class="text-grey-500" label="Нийгмийн сүлжээний холбоосууд" />
                        </UDropdown>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center text-slate-900 py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Gersystem
          </div>
        </div>
      </section>
    </div>
</template>

<script setup lang="ts">
const items1 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items2 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items3 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items4 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items5 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items6 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items7 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items8 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items9 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
const items10 = [
  [{
    label: 'Шутис 3-р дамжаа',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
</script>
