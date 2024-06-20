<template>
    <div>
        <Header/>
    </div>
    <div class="bg-sky-50 h-full w-full flex">

      <div class="flex bg-white border w-full rounded-lg mx-12">
         <div class="flex bg-sky-50 border w-full rounded-lg h-fit mx-12 my-6 ">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Ner :" name="email" color="sky" class="mx-12 my-12 text-sky-500 w-96">
      <UInput v-model="state.email" color="sky"/>
    </UFormGroup>
    <UFormGroup label="Password" name="password" color="sky" class="mx-12 my-12 text-black">
      <UInput v-model="state.password" type="password" color="sky"/>
    </UFormGroup>
    <UFormGroup label="Email" name="email" color="sky" class="mx-12 my-12 text-black">
      <UInput v-model="state.email" color="sky"/>
    </UFormGroup>
  
  <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky" class="w-96 mx-12 my-12"/>
    <UFormGroup label="Password" name="password" color="sky" class="mx-12 my-12">
      <UInput v-model="state.password" type="password" color="sky"/>
    </UFormGroup>
    <UFormGroup label="Email" name="email" color="sky" class="mx-12 my-12">
      <UInput v-model="state.email" color="sky"/>
    </UFormGroup>
    <UFormGroup label="Password" name="password" color="sky" class="mx-12 my-12">
      <UInput v-model="state.password" type="password" color="sky"/>
    </UFormGroup>

    <UButton type="submit" color="sky" class="ml-32 my-6">
      Submit
    </UButton>
  </UForm>
         </div>
        </div>
    </div>
    <!-- footer -->
  <Footer/> 

</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

