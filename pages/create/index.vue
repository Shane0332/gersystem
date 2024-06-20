<template>
  <div class="bg-sky-50 h-full w-full flex justify-center ">
    <div class="bg-white border h-2/4 w-72 rounded-lg shadow-lg shadow-sky-500 mt-32 mb-96">
        <div class="mx-8 my-2">
            <span class="text-slate-900 font-bold text-3xl">Create Account</span>
            <p class="text-sm text-slate-500">Start managing your pets today?</p>
        </div>
        <div class="mt-6">
            <UFormGroup  name="org" class="mx-4">
          <span class="text-slate-900 text-sm">First name *</span>
           <UInput v-model="state.org" color="sky"/>
         </UFormGroup>  
        </div>
        <div class="mt-6">
            <UFormGroup  name="email" class="mx-4">
          <span class="text-slate-900 text-sm">Email *</span>
           <UInput v-model="state.email" color="sky"/>
         </UFormGroup>  
        </div>
        <div class="mt-6">
            <UFormGroup  name="password" class="mx-4">
          <span class="text-slate-900 text-sm">Password *</span>
           <UInput v-model="state.password" color="sky"/>
         </UFormGroup>  
        </div>
        <Button class="bg-sky-500 rounded-lg h-8 w-64 mt-6 mx-4">Create Account</Button>
        <NuxtLink to="/home"><Button class="bg-sky-500 rounded-lg h-8 w-64 my-6 mx-4">Home</Button></NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const value = ref('')


const schema = object({
  org: string().email('Invalid email').required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  org : undefined,
  email : undefined,

  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

