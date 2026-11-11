<template>
  <div class="gap-4 grid grid-cols-6 p-3 w-full">
    <div class="flex flex-col gap-4">
      <fwb-input
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.input[size.value]"
        :label="`Input ${size.label}`"
        :size="size.value"
        :placeholder="`Input ${size.label}`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-textarea
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.textarea[size.value]"
        :label="`Textarea ${size.label}`"
        :size="size.value"
        rows="1"
        :placeholder="`Input ${size.label} text...`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-file-input
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.file[size.value]"
        :label="`File Input ${size.label}`"
        :size="size.value"
        :placeholder="`Select ${size.label} file...`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-select
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.select[size.value]"
        :label="`Select ${size.label}`"
        :options="countries"
        :size="size.value"
        :placeholder="`Select ${size.label}`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-autocomplete
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.autocomplete[size.value]"
        :label="`Autocomplete ${size.label}`"
        :options="countries"
        :placeholder="`Search ${size.label}...`"
        :search-fields="['name']"
        :size="size.value"
        display="name"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-checkbox
        v-model="check"
        label="Custom styled checkbox"
        class="bg-amber-50 dark:bg-green-900 border-amber-400 dark:border-green-600 focus:ring-amber-500 dark:focus:ring-green-400 text-amber-600 dark:text-green-500"
        label-class="font-bold text-amber-900 dark:text-green-200"
        wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
      />
    </div>
    <hr class="col-span-6 bg-gray-200 dark:bg-gray-600 my-8 border-0 h-px">
    <div>
      <fwb-input
        v-model="selected.input.md"
        wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
        label-class="text-xl font-bold text-amber-900 dark:text-green-200"
        class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
        input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
        label="First name"
        placeholder="enter your first name"
      />
    </div>
    <fwb-textarea
      v-model="selected.textarea.md"
      :label="`Your story`"
      rows="1"
      :placeholder="`start typing something...`"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[textarea:focus]:border-amber-900 dark:border-green-600 dark:has-[textarea:focus]:border-green-400 has-[textarea:focus]:ring-amber-300 dark:has-[textarea:focus]:ring-green-800"
      textarea-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
    />
    <fwb-file-input
      v-model="selected.file.md"
      label="Your portrait"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      class="bg-amber-100 hover:file:bg-amber-600 dark:bg-green-900 dark:hover:file:bg-green-500 dark:file:bg-green-700 file:bg-amber-400 border-2 border-amber-500 focus:border-amber-900 dark:border-green-600 dark:focus:border-green-400 dark:file:border-green-600 file:border-amber-500 focus:ring-amber-300 dark:focus:ring-green-800 dark:file:text-green-100 file:text-amber-900"
      :class="selected.file.md
        ? 'text-amber-900 dark:text-green-100'
        : 'text-amber-500 dark:text-green-500'"
    />
    <fwb-select
      v-model="selected.select.md"
      label="Your country"
      :options="countries"
      placeholder="select country"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 focus:border-amber-900 dark:border-green-600 dark:focus:border-green-400 focus:ring-1 focus:ring-amber-300 dark:focus:ring-green-800"
      :class="selected.select.md
        ? 'text-amber-900 dark:text-green-100'
        : 'text-amber-500 dark:text-green-500 focus:text-amber-900 dark:focus:text-green-100'"
      chevron-class="text-amber-900 dark:text-green-100"
      clearable
    />
    <fwb-autocomplete
      v-model="selected.autocomplete.md"
      :options="countries"
      :search-fields="['name']"
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
      display="name"
      dropdown-class="border-amber-300 dark:border-green-700"
      input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
      label="Select a country"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      placeholder="Search countries..."
      wrapper-class="bg-amber-300 dark:bg-green-800 border-2 border-amber-700 dark:border-green-400 rounded-lg p-3"
    />
    <div class="mt-auto">
      <fwb-toggle
        v-model="toggle"
        label="Enable feature"
        class="bg-amber-200 dark:bg-green-900 dark:peer-checked:bg-green-500 peer-checked:bg-amber-600 dark:peer-focus:ring-green-800 peer-focus:ring-amber-300"
        label-class="font-bold text-amber-900 dark:text-green-200"
        wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg px-3 pb-5 pt-15"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sizes = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

const selected = ref({
  autocomplete: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  select: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  input: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  file: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  textarea: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
})
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]

const toggle = ref(false)

</script>
