<template>
  <!-- Header -->
  <div>
    <Header/>
  </div>
  <div class="bg-sky-50 flex">
    <div class="mx-32 my-32 bg-white rounded-lg w-2/4 flex  shadow-lg border">
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
       <!-- name of org -->
         <UFormGroup  name="org" class="my-12 mx-12">
          <span class="text-slate-900 ">Байгууллагын нэр :</span>
           <UInput v-model="state.org" color="sky"/>
         </UFormGroup>
         <!-- about by org -->
         <p class="text-slate-900 mx-12">Байгууллагын тухай :</p>
         <UTextarea v-model="value" color="sky" class="my-12 mx-12"/>
         <!-- zurag oruulah heseg -->
         <p class="text-slate-900 mx-12">Байгууллагын зураг :</p>
         <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky" class="mx-12 my-12"/>
     
         <UFormGroup  name="phone">
          <span class="text-slate-900 mx-12">Холбогдох утас :</span>
           <UInput v-model="state.phone" type="phone" color="sky" class="mx-12"/>
         </UFormGroup>
     
         <UButton type="submit" color="sky" class="h-12 w-16 my-6 mx-12">Next</UButton>
       </UForm>
    </div>
  </div>
  <!-- FooterL -->
   <div class="bg-sky-50 h-full w-full">
     <div class="h-fit mx-12 bg-white border text-wrap flex">
           <div class="ml-28 my-4 flex ">
               <p class="text-slate-900">Gersystem сайтад зочилсонд баярлалаа. Та аян замдаа сайн яваарай<Icon name="material-symbols-light:sentiment-satisfied-outline" class="h-6 w-6"/></p>
           </div>
           <div class="flex space-x-14">
               <div class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 my-6 rounded-xl ml-80  border shadow-xl">
                   <Icon name="ic:baseline-facebook" class="text-sky-500 ml-1 my-2 h-6 w-8"/>
               </div>
               <div class="bg-sky-50 h-10 w-10 transition ease-in-out hover:scale-110 my-6 rounded-xl ml-96  border shadow-xl">
                   <Icon name="tabler:brand-instagram" class="text-sky-500 ml-1 my-2 h-6 w-8"/>
               </div>
               <div class="bg-sky-50 h-10 transition ease-in-out hover:scale-110 w-10 my-6 rounded-xl ml-96  border shadow-xl">
                   <Icon name="mdi:twitter" class="text-sky-500 ml-1 my-2 h-6 w-8"/>
               </div>
               <div class="bg-sky-50 h-10 transition ease-in-out hover:scale-110 w-10 my-6 rounded-xl ml-96  border shadow-xl">
                   <Icon name="material-symbols:mail-outline" class="text-sky-500 ml-1 my-2 h-6 w-8"/>
               </div>
    
           </div>
       </div>
   </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const value = ref('')


const schema = object({
  org: string().required('Required'),
  phone: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  org : undefined,
  phone: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

