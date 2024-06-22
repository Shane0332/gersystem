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
         <p>Байгууллагын тухай :</p>
         <UTextarea v-model="value" color="sky"/>
         <!-- zurag oruulah heseg -->
         <p>Байгууллагын зураг :</p>
         <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky"/>
     
         <UFormGroup label="Утасны дугаар :" name="phone">
           <UInput v-model="state.phone" type="phone" color="sky"/>
         </UFormGroup>
     
         <UButton type="submit">Next</UButton>
       </UForm>
    </div>
  </div>
  <!-- FooterL -->
  <div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const value = ref('')


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

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

