<template>
  <!-- Ger -->
  <!-- Header -->
  <div>
    <Header />
  </div>
  <!-- Body -->
  <div class="bg-sky-50 h-full w-full flex justify-center">
    <div class="bg-slate-900 border shadow-sm w-2/4 shadow-sky-500 rounded-lg">
      <p class="font-bold text-2xl text-slate-900 text-center my-6">Ger Registration</p>
      
      <!-- Form -->
      <form @submit.prevent="onSubmit">
        <div class="mt-6">
          <span class="text-white mx-4">Гэрийн дугаар*</span>
          <UInput v-model="state.ger_dugaar" color="sky" class="w-32 mx-4" />
        </div>

        <div class="mt-6">
          <UFormGroup name="size" class="mx-4">
            <span class="text-white text-sm">Гэрийн хэмжээ*</span>
            <URadioGroup v-model="state.ger_size" :options="options2" color="sky" />
          </UFormGroup>
        </div>

        <div class="mt-6">
          <UFormGroup name="type" class="mx-4">
            <span class="text-white text-sm">Гэрийн төрөл*</span>
            <URadioGroup v-model="state.ger_type" :options="options1" color="sky" />
          </UFormGroup>
        </div>

        <div class="mt-6">
          <UFormGroup name="beds" class="mx-4">
            <span class="text-white text-sm">Хэдэн ортой *</span>
            <URadioGroup v-model="state.beds" :options="orniitoo" color="sky" />
          </UFormGroup>
        </div>

        <div class="mt-6">
          <UFormGroup name="breakfast" class="mx-4">
            <span class="text-white text-sm">Өглөөний цай *</span>
            <URadioGroup v-model="state.breakfast" :options="options" color="sky" />
          </UFormGroup>
        </div>

        <div class="mt-6">
          <UFormGroup name="image" class="mx-4">
            <span class="text-white text-sm">Гэрийн зураг *</span>
            <UInput type="file" size="sm" icon="i-heroicons-folder" color="sky" @change="handleFileChange"/>
          </UFormGroup>
        </div>

        <div class="mt-6">
          <span class="text-white mx-4">Гэрийн үнэ*</span>
          <UInput v-model="state.ger_price" color="sky" class="w-32 mx-4" />
        </div>

        <div class="mt-6 mb-12">
          <Button type="submit" class="bg-sky-500 h-10 mx-4 my-6 w-24 rounded-lg border">Болсон</Button>
        </div>
      </form>
    </div>
  </div>
  <!-- Footer -->
  <div class="bg-sky-50 h-full w-full">
    <div class="h-fit mx-12 bg-white border text-wrap flex">
      <div class="ml-28 my-4 flex">
        <p class="text-white underline">Gersystem сайтад зочилсонд баярлалаа. Та аян замдаа сайн яваарай
          <Icon name="material-symbols-light:sentiment-satisfied-outline" class="h-6 w-6" />
        </p>
      </div>
      <div class="flex space-x-14">
        <div class="bg-sky-50 transition ease-in-out hover:scale-110 h-10 w-10 my-6 rounded-xl ml-80 border shadow-xl">
          <Icon name="ic:baseline-facebook" class="text-sky-500 ml-1 my-2 h-6 w-8" />
        </div>
        <div class="bg-sky-50 h-10 w-10 transition ease-in-out hover:scale-110 my-6 rounded-xl ml-96 border shadow-xl">
          <Icon name="tabler:brand-instagram" class="text-sky-500 ml-1 my-2 h-6 w-8" />
        </div>
        <div class="bg-sky-50 h-10 transition ease-in-out hover:scale-110 w-10 my-6 rounded-xl ml-96 border shadow-xl">
          <Icon name="mdi:twitter" class="text-sky-500 ml-1 my-2 h-6 w-8" />
        </div>
        <div class="bg-sky-50 h-10 transition ease-in-out hover:scale-110 w-10 my-6 rounded-xl ml-96 border shadow-xl">
          <Icon name="material-symbols:mail-outline" class="text-sky-500 ml-1 my-2 h-6 w-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { object, string } from 'yup'
import type { InferType } from 'yup'
import * as Yup from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const options2 = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
]

const options1 = [
  { label: 'Type A', value: 'type_a' },
  { label: 'Type B', value: 'type_b' },
  { label: 'Type C', value: 'type_c' },
]

const orniitoo = [
  { label: '1 ор', value: '1' },
  { label: '2 ор', value: '2' },
  { label: '3 ор', value: '3' },
]

const options = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
]

const schema = object({
  ger_dugaar: string().required('Required'),
  ger_size: string().required('Required'),
  ger_type: string().required('Required'),
  beds: string().required('Required'),
  breakfast: string().required('Required'),
  ger_price: string().required('Required'),
})

const state = reactive({
  ger_dugaar: '',
  ger_size: '',
  ger_type: '',
  beds: '',
  breakfast: '',
  ger_price: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    state.file = target.files[0];
  }
}

type Schema = InferType<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Validate form
  try {
    await schema.validate(state, { abortEarly: false })
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error('Validation errors:', error.errors)
      return
    }
  }

  // Prepare form data
  const formData = new FormData();
  formData.append('ger_dugaar', state.ger_dugaar);
  formData.append('ger_size', state.ger_size);
  formData.append('ger_type', state.ger_type);
  formData.append('beds', state.beds);
  formData.append('breakfast', state.breakfast);
  formData.append('ger_price', state.ger_price);
  if (state.file) {
    formData.append('image', state.file);
  }

  try {
    // Submit form data
    const response = await fetch('/api/foo/createGer', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle successful form submission
    const result = await response.json();
    console.log('Form submitted successfully:', result);
    // Optionally redirect or show a success message
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
</script>
