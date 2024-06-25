<template>
  <!-- Header -->
  <div>
    <Header/>
  </div>
<!-- Body -->
 <div class="bg-sky-50 h-full w-full flex justify-center">
  <div class="bg-white border shadow-sm w-2/4 shadow-sky-500 transition scale-90 hover:scale-100 rounded-lg">
    <p class="font-bold text-2xl text-slate-900 text-center my-6">Ger Registration</p>
    <div class="mt-6">
      <span class="text-slate-900 mx-4 ">Гэрийн дугаар*</span>
      <UInput v-model="value" color="sky" class="w-32 mx-4"/>
    </div>
    <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">Гэрийн хэмжээ*</span>
          <URadioGroup v-model="selected"  :options="options2" color="sky"/>
         </UFormGroup>  
    </div>
    <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">Гэрийн төрөл*</span>
          <URadioGroup v-model="selected"  :options="options1" color="sky"/>
         </UFormGroup>  
    </div>

    <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">Хэдэн ортой *</span>
          <URadioGroup v-model="state.org" :options="orniitoo" color="sky"/>
         </UFormGroup>  
    </div>
    <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">Өглөөний цай *</span>
          <URadioGroup v-model="selected"  :options="options" color="sky"/>
        </UFormGroup>  
    </div>
    <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">Гэрийн зураг *</span>
          <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky"/>
         </UFormGroup>  
    </div>
    <div class="mt-6">
      <span class="text-slate-900 mx-4 ">Гэрийн үнэ*</span>
      <UInput v-model="value" color="sky" class="w-32 mx-4"/>
    </div>
    <div class="mt-6 mb-12">
         <NuxtLink to="/ger"><Button class="bg-sky-500 h-10 mx-4 my-6 w-24 rounded-lg border">Болсон</Button> </NuxtLink>
=    </div>
   </div>
 </div>
 <!-- Footer -->
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
   <div class="bg-cyan-500 h-96 w-96">
<p>kjsdhfk</p>
   </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const options = [{
  value: 'байгаа',
  label: 'байгаа'
}, {
  value: 'байхгүй',
  label: 'байхгүй'
}]
const selected = ref('sms')

const options1=[{
  value:'Luxury',
  label:'Luxury'
},{
  value:'Engiin',
  label:'Engiin'
}]

const options2=[{
  value:'3',
  label:'3'
},{
  value:'4',
  label:'4',
},{
  value:'5',
  label:'5'
},{
  value:'6',
  label:'6'
},{
  value:'8',
  label:'8'
}]

const orniitoo=[{
value:'1',
label:'1'
},{
  value:'2',
  label:'2'
},{
  value:'3',
  label:'3'
},{
  value:'4',
  label:'4'
},{
  value:'5',
  label:'5'
}]

const schema = object({
  org: string().email('Invalid email').required('Required'),
  phone: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  org : undefined,
  phone: undefined
})
const value = ref('')

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>



