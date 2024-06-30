<template>
  <!-- Header -->
  <div>
    <Header />
  </div>
  <div class="bg-sky-50 flex justify-center items-center min-h-screen">
    <div class="bg-slate-600 rounded-lg w-1/2 flex shadow-lg border p-8">
      <UForm :schema="schema" :state="state" class="text-black space-y-4" @submit="onSubmit">
        <!-- name of org -->
        <UFormGroup name="org.name" class="my-4 text-black">
          <span class="text-black">Байгууллагын нэр :</span>
          <UInput class="text-black" v-model="state.org.name" color="sky" />
        </UFormGroup>
        <!-- about by org -->
        <UFormGroup name="org.name" class="my-4 text-black">
        <p class="text-black">Байгууллагын тухай :</p>
        <UTextarea v-model="state.org.info" color="sky" class="my-4 text-black" />
      </UFormGroup>
        <!-- zurag oruulah heseg -->
        <UFormGroup name="org.name" class="my-4 text-black">

        <p class="text-black">Байгууллагын зураг :</p>
        <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky" class="my-4 text-black"
          v-model="state.org.image" />
        </UFormGroup>
        <UFormGroup class="text-black" name="org.number">
          <span class="text-black">Холбогдох утас :</span>
          <UInput v-model="state.org.number" type="phone" color="sky" class="my-4 text-black" />
        </UFormGroup>

        <UFormGroup class="text-black" name="org.number">
          <span class="text-black">Гэрийн тоо :</span>
          <UInput v-model="state.org.b_gertoo" type="phone" color="sky" class="my-4 text-black" />
        </UFormGroup>
        <UFormGroup class="text-black" name="org.number">
          <span class="text-black">Эзэмшиг  :</span>
          <UInput v-model="state.org.e_id" type="phone" color="sky" class="my-4 text-black" />
        </UFormGroup>
        <UButton type="submit" color="sky" class="h-12 w-full my-4">Next</UButton>
      </UForm>
    </div>
  </div>

  <!-- Footer -->
  <div class="bg-sky-50 w-full">
    <div class="h-fit mx-12 bg-white border text-wrap flex flex-col items-center p-4">
      <p class="text-slate-900 mb-4">Gersystem сайтад зочилсонд баярлалаа. Та аян замдаа сайн яваарай
        <Icon name="material-symbols-light:sentiment-satisfied-outline" class="h-6 w-6 inline" />
      </p>
      <div class="flex space-x-6">
        <div
          class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 rounded-xl border shadow-xl flex items-center justify-center">
          <Icon name="ic:baseline-facebook" class="text-sky-500 h-6 w-6" />
        </div>
        <div
          class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 rounded-xl border shadow-xl flex items-center justify-center">
          <Icon name="tabler:brand-instagram" class="text-sky-500 h-6 w-6" />
        </div>
        <div
          class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 rounded-xl border shadow-xl flex items-center justify-center">
          <Icon name="mdi:twitter" class="text-sky-500 h-6 w-6" />
        </div>
        <div
          class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 rounded-xl border shadow-xl flex items-center justify-center">
          <Icon name="material-symbols:mail-outline" class="text-sky-500 h-6 w-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { object, string } from 'yup';
import { ref, reactive } from 'vue';
import type { FormSubmitEvent } from '#ui/types';
import type { InferType } from 'yup';
import { getStorage } from 'firebase/storage';

const schema = object({
  org: object({
    name: string().required('Required'),
    info: string().required('Required'),
    image: string().required('Required'),
    b_gertoo: string().required('Required'),
    e_id: string().required('Required'),
    number: string().min(8, 'Must be at least 8 characters').required('Required'),
  })
})


type Schema = InferType<typeof schema>;

const state = reactive<Schema>({
  org: {
    name: '',
    info: '',
    image: '',
    number: '',
    b_gertoo: '',
    e_id: '',
  }
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {

  try {
    // Assuming validation has passed
    const response = await fetch('/api/foo/add?col=Baiguullaga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.org)
    });

    const { result } = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>
